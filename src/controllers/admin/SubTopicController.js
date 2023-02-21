const TopicModel = require("../../models/TopicModel");
const SubTopicModel = require("../../models/SubTopicModel");
const { slugify } = require("../../services/helper");

const fetch = async (req, res) => {
    let { search, length, page, sortKey, sortDir } = req.query;
    let sort = {};
    if (sortKey) {
        if (sortDir === "desc") sort[sortKey] = -1;
        else sort[sortKey] = 1;
    }

    let totalCount = await SubTopicModel.find({
        name: new RegExp(search, "i")
    }).count();

    let data = await SubTopicModel.find({
        name: new RegExp(search, "i")
    }).populate({
        path: "topic",
        select: { _id: 1, name: 1 },
        populate: {
            path: "subject",
            select: { _id: 1, name: 1},
            populate: {
                path: "year",
                select: { _id: 1, name: 1 },
                options: {
                    sort: sort
                }
            },
            options: {
                sort: sort
            } 
        },
        options: {
            sort: sort
        }
    }).sort(sort)
    .skip((page - 1) * length)
    .limit(length);

    res.json({
        data,
        totalCount
    })
}

const create = async (req, res) => {
    try {
        let subTopic = req.body;
        subTopic.slug = slugify(subTopic.name);
        let result = await SubTopicModel.create(subTopic);
        const topicById = await TopicModel.findById(subTopic.topic);
        topicById.subTopics.push(result);
        await topicById.save();
    
        res.json({
            success: true,
            msg: "Successfully created!"
        });
    } catch (err) {
        res.json({
            success: false,
            msg: err.message
        });
    }
}

const fetchById = async (req, res) => {
    try {
        let { id } = req.params;
        let subTopic = await SubTopicModel.findById(id).populate({
            path: "topic",
            select: { _id: 1, name: 1 },
            populate: {
                path: "subject",
                select: { _id: 1, name: 1 },
                populate: {
                    path: "year",
                    select: { _id: 1, name: 1 }
                }
            }
        });
        res.json({
            success: true,
            data: subTopic
        })
    } catch (err) {
        res.json({
            success: false,
            msg: err.message
        });
    }
}

const update = async (req, res) => {
    try {
        let { id } = req.params;
        let subTopic = req.body;
        let result = await SubTopicModel.findByIdAndUpdate(id, subTopic);
        res.json({
            success: true,
            data: result,
            msg: "Successfully updated."
        });
    } catch (err) {
        res.json({
            success: false,
            msg: err.message
        });
    }
}

const remove = async (req, res) => {
    const { id } = req.params;
    const subTopic = await SubTopicModel.findByIdAndDelete(id);
    const topicById = await TopicModel.findById(subTopic.topic);
    topicById.subTopics.pull(id);
    await topicById.save();
    res.json({
        success: true
    });
}

module.exports = {
    fetch,
    create,
    fetchById,
    update,
    remove
}