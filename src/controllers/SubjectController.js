const YearModel = require("../models/YearModel");
const SubjectModel = require("../models/SubjectModel");

const fetchById = async (req, res) => {
    try {
        let { id } = req.params;
        let subject = await SubjectModel.findById(id).populate("topics");
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

const fetchBySlug = async (req, res) => {
    try {
        let { year_slug, subject_slug } = req.query;
        let year = await YearModel.findOne({ slug: year_slug });
        let subject = await SubjectModel.findOne({ 
            year: year._id, 
            slug: subject_slug 
        }).populate("topics");
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

module.exports = {
    fetchById,
    fetchBySlug
}