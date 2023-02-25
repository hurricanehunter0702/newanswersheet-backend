const mongoose = require('mongoose');
const SubjectModel = require("../models/SubTopicModel");
const TopicModel = require("../models/TopicModel");
const SubTopicModel = require("../models/SubTopicModel");

const YearSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    description: {
        type: String
    },
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }] 
}, {
    timestamps: true
});

YearSchema.pre("findOneAndDelete", async function(next) {
    let id = this._conditions._id;
    await SubjectModel.deleteMany({year: id});
    await TopicModel.deleteMany({year: id});
    await SubTopicModel.deleteMany({year: id});
    next();
});

const Year = mongoose.model('Year', YearSchema);

module.exports = Year;