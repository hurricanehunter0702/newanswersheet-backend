const YearModel = require("../../models/YearModel");
const { slugify } = require("../../services/helper");

const fetch = async (req, res) => {
    let {search, length, page, sortKey, sortDir} = req.query;
    let sort = {};
    if (sortKey) {
        if (sortDir === "desc") sort[sortKey] = -1;
        else sort[sortKey] = 1;
    }
    let totalCount = await YearModel.find({
        name: new RegExp(search, "i")
    }).count();

    let data = await YearModel.find({
        name: new RegExp(search, "i")
    }).sort(sort).skip((page - 1) * length).limit(length);

    res.json({
        data,
        totalCount
    });
}

const fetchAll = async (req, res) => {
    let years = await YearModel.find();
    res.json(years);
}

const fetchAllPopulate = async (req, res) => {
    let years = await YearModel.find().select({ _id: 1, name: 1 }).populate({
        path: "subjects", 
        select: { _id: 1, name: 1 },
        populate: {
            path: "topics",
            select: { _id: 1, name: 1 }
        }
    });
    return res.json(years);   
}

const create = async (req, res) => {
    try {
        let year = req.body;
        year.slug = slugify(year.name);
        let result = await YearModel.create(year);
        res.json({
            success: true,
            msg: "Successfully created!",
            data: result
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
        let year = req.body;
        let result = await YearModel.findByIdAndUpdate(id, year);
        res.json({
            success: true,
            msg: "Successfully updated.",
            data: result
        });
    } catch (err) {
        res.json({
            success: false,
            msg: err.message
        });
    }
}

const remove = async (req, res) => {
    try {
        let { id } = req.params;
        await YearModel.findByIdAndDelete(id);
        res.json({
            success: true,
            msg: "Successfully deleted!"
        });
    } catch (err) {
        res.json({
            success: false,
            msg: err.message
        });
    }
}

module.exports = {
    fetch,
    fetchAll,
    fetchAllPopulate,
    create,
    update,
    remove
}