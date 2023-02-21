const YearModel = require("../../models/YearModel");
const SubjectModel = require("../../models/SubjectModel");
const { getMainUrl, slugify } = require("../../services/helper");
const path = require("path");
const fs = require('fs');

const fetch = async (req, res) => {
    let { search, length, page, sortKey, sortDir } = req.query
    let sort = {};
    if (sortKey) {
        if (sortDir === "desc") sort[sortKey] = -1;
        else sort[sortKey] = 1;
    }
    
    let totalCount = await SubjectModel.find({
        name: new RegExp(search, "i")
    }).count();
    let data = await SubjectModel.find({
        name: new RegExp(search, "i")
    }).populate({
        path: "year",
        options: {
            sort: sort
        }
    }).sort(sort).skip((page - 1) * length).limit(length);

    res.json({
        data,
        totalCount
    });
}

const create = async (req, res) => {
    try {
        let subject = req.body;
        if (req.file) {
            subject.icon = getMainUrl(req) + `/uploads/subjects/${req.file.filename}`;        
        } else {
            subject.icon = null;
        }
        subject.slug = slugify(subject.name);
        let result = await SubjectModel.create(subject);
        const yearById = await YearModel.findById(subject.year);
        yearById.subjects.push(result);
        await yearById.save();
        res.json({
            success: true,
            data: result,
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
        let subject = await SubjectModel.findById(id);
        res.json({
            success: true,
            data: subject
        });
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
        let subject = req.body;
        let result = await SubjectModel.findById(id);
        if (req.file) {
            subject.icon = getMainUrl(req) + `/uploads/subjects/${req.file.filename}`;        
            if (result.icon) {
                let fileName = path.basename(result.icon);
                if (fileName && fs.existsSync(`public/uploads/subjects/${fileName}`)) fs.unlinkSync(`public/uploads/subjects/${fileName}`);
            }
        }
        result = await result.update(subject);
        res.json({
            success: true,
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
        let subject = await SubjectModel.findByIdAndDelete(id);
        if (subject.icon) {
            let fileName = path.basename(subject.icon);
            if (fileName) fs.unlinkSync(`public/uploads/subjects/${fileName}`);
        }
        let yearById = await YearModel.findById(subject.year);
        yearById.subjects.pull(id);
        await yearById.save();

        res.json({
            success: true,
            data: subject,
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
    create,
    fetchById, 
    update,
    remove
}