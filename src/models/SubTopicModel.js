const mongoose = require("mongoose");

const SubTopicSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    slug: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    year: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Year'
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    },
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic'
    },
    permission: {
        type: Number,
        default: 0
    }
});

const SubTopic = mongoose.model('SubTopic', SubTopicSchema);

module.exports = SubTopic;