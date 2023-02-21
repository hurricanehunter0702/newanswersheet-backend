const MessageModel = require("../models/MessageModel");

const create = async (req, res) => {
    try {
        let data = req.body;
        let message = await MessageModel.create(data);
        res.json({
            success: true,
            data: {
                message,
                msg: "Successfully sent."
            }
        })
    } catch (err) {
        res.json({
            success: false,
            data: {
                msg: err.message
            }
        });
    }
}

module.exports = {
    create
}