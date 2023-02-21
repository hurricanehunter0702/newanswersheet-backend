const InvoiceModel = require("../models/InvoiceModel");
const moment = require("moment");

const fetch = async (req, res) => {
    let { search, length, page, sortKey, sortDir } = req.query;
    let sort = {};
    if (sortKey) {
        if (sortDir === "desc") sort[sortKey] = -1;
        else sort[sortKey] = 1;
    }
    let totalCount = await InvoiceModel.find({
        $and: [{
            user: req.user.userId
        }, {
            $or: [{
                invoice_id: new RegExp(search, "i")
            }, {
                amount: isNaN(Number(search)) ? "" : Number(search)
            }, {
                item_name: new RegExp(search, "i")
            }, {
                paid_date: {
                    $gte: moment(search).isValid() ? moment(search).toDate() : ""
                }
            }]
        }]
    }).count();

    let data = await InvoiceModel.find({
        $and: [{
            user: req.user.userId
        }, {
            $or: [{
                invoice_id: new RegExp(search, "i")
            }, {
                amount: isNaN(Number(search)) ? "" : Number(search)
            }, {
                item_name: new RegExp(search, "i")
            }, {
                paid_date: {
                    $gte: moment(search).isValid() ? moment(search).toDate() : ""
                }
            }]
        }]
    }).sort(sort).skip((page - 1) * length).limit(length);
    res.json({
        data,
        totalCount
    });
}

const fetchById = async (req, res) => {
    try {
        let { id } = req.params;
        let invoice = await InvoiceModel.findById(id);
        res.json({
            success: true,
            invoice
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
    fetchById
}