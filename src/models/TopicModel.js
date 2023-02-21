const mongoose = require("mongoose");
const SubTopicModel = require("../models/SubTopicModel");
const TopicSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    year: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Year'
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    },
    subTopics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTopic'
    }]
}, {
    timestamps: true
});

TopicSchema.pre("findOneAndDelete", async function(next) {
    let id = this._conditions._id;
    await SubTopicModel.deleteMany({topic: id});
    next();
});


const Topic = mongoose.model('Topic', TopicSchema);

module.exports = Topic;