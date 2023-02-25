const YearModel = require("../../models/YearModel");
const { slugify, getMainUrl } = require("../../services/helper");
const path = require("path");
const fs = require('fs');

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
        if (req.file) {
            year.image = getMainUrl(req) + `/uploads/years/${req.file.filename}`;
        } else {
            year.image = null;
        }
        year.slug = slugify(year.name);
        let result = await YearModel.create(year);
        res.json({
            success: true,
            msg: "Successfully created!",
            data: result
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
        let year = req.body;
        let { id } = req.params;
        let currentYear = await YearModel.findById(id);
        if (req.file) {
            year.image = getMainUrl(req) + `/uploads/years/${req.file.filename}`;
            if (currentYear.image) {
                let fileName = path.basename(currentYear.image);
                if (fileName && fs.existsSync(`public/uploads/years/${fileName}`)) fs.unlinkSync(`public/uploads/years/${fileName}`);
            }
        }
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