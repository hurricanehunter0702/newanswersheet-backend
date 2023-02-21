const mongoose = require("mongoose");
const TopicModel = require("../models/TopicModel");
const SubTopicModel = require("../models/SubTopicModel");

const SubjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    icon: {
        type: String
    },
    year: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Year'
    },
    topics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic'
    }]
}, {
    timestamps: true
});

SubjectSchema.pre("findOneAndDelete", async function(next) {
    let id = this._conditions._id;
    await TopicModel.deleteMany({subject: id});
    await SubTopicModel.deleteMany({subject: id});
    next();
});

const Subject = mongoose.model('Subject', SubjectSchema);

module.exports = Subject;