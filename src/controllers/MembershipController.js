const MembershipHistory = require("../models/MembershipHistoryModel");
const MembershipModel = require("../models/MembershipModel");
const PricingModel = require("../models/PricingModel");
const mongoose = require('mongoose');

const fetch = async (req, res) => {
    try {
        let memberships = await MembershipModel.find();
        let data = [], i = 0;
        for (membership of memberships) {
            let items = await PricingModel.find({ period: membership.period });
            data[i] = {
                _id: membership._id,
                name: membership.name,
                slug: membership.slug,
                label: membership.label,
                description: membership.description,
                period: membership.period,
                items: items
            }
            i++;
        }
        res.json({
            success: true,
            memberships: data
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
        let membership = await MembershipModel.findOne({ slug: id });
        res.json({
            success: true,
            membership: membership
        });
    } catch (err) {
        res.json({
            success: false,
            msg: err.message
        });
    }
}

const getPrice = async (req, res) => {
    let { period, subject_nums } = req.query;
    let pricing = await PricingModel.findOne({ period: period, subject_nums: subject_nums });
    res.json(pricing);
}

const getPurchasedMemberships = async (req, res) => {
    let memberships = await MembershipHistory.find({
        user: req.user.userId,
        $or: [{
            expiredDate: {
                $gte: new Date().toISOString()
            }
        }, {
            period: -1
        }]
    }).populate({
        path: 'subjects', 
        populate: {
            path: 'year'
        }
    });
    res.json(memberships);
}

const checkPurchasedMembership = async (req, res) => {
    let { user, subject } = req.query;
    let membership = await MembershipHistory.find({
        user: user,
        subjects: { $in: [subject] },
        isPaid: true,
        $or: [{
            expiredDate: {
                $gte: new Date().toISOString()
            }
        }, {
            period: -1

        }]
    });
    res.json(membership);
}

module.exports = {
    fetch,
    fetchById,
    getPrice,
    getPurchasedMemberships,
    checkPurchasedMembership
}