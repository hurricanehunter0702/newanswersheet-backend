const crypto = require("node:crypto");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");
const EmailVerifyModel = require("../models/EmailVerifyModel");
const PasswordVerifyModel = require("../models/PasswordVerifyModel");
const sgMail = require("@sendgrid/mail");
const axios = require("axios");
const moment = require("moment");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const register = async (req, res) => {
    let data = req.body;
    try {
        let salt = bcrypt.genSaltSync(10);
        data.password = bcrypt.hashSync(data.password, salt);
        let user = await UserModel.findOne({ email: data.email });
        if (user) {
            res.json({
                success: false,
                msg: "Email already exists, try logging in."
            });
        } else {
            user = await UserModel.create(data);
            let buffer = await crypto.randomBytes(30);
            let token = buffer.toString('hex');
            await EmailVerifyModel.create({
                email: user.email,
                token: token
            });
            await sgMail.send({
                to: user.email,
                from: process.env.SENDGRID_USER,
                subject: "AnswerSheet - your account is almost ready",
                html: `
                <div style="background: #fafafa; font-family: sans-serif;" max-width: 660px">
                    <div style="padding: 10px; margin-bottom: 20px; background: #d6e4f1">
                        <img src="${process.env.HOSTNAME}/logo.png"/>
                    </div>
                    <div style="padding: 10px 20px; border-top: 2px solid #ebebeb; border-bottom: 2px solid #ebebeb;">
                        <h2 style="color: #005492;">Your account is almost ready</h2>
                        <p>Hi ${user.firstName}</p>
                        <p>Click below to finish your registration and access our HSC resource.</p>
                        <div style="padding: 20px;">
                            <a href="${process.env.HOSTNAME}/verify-email/${token}" style="text-decoration: none; padding: 10px 30px; background: #005492; display: inline-block; color: #fafafa">Validate email</a>
                        </div>
                        <p>This link expires in 72 hours.</p>
                        <p>If you have any questions or didn't make this change, please contact us at support@answersheet.au</p>
                        <p>Sincerely,</p>
                        <p style="font-weight: 700;">The AnswerSheet team</p>
                    </div>
                    <div style="padding: 10px 20px; font-size: 12px;">
                        <p style="margin-top: 5px; margin-bottom: 5px;">&copy; 2023 AnswerSheet Pty Ltd</p>
                        <p style="margin-top: 5px; margin-bottom: 5px;">Our <a href="${process.env.HOSTNAME}/privacy-policy">Privacy Policy</a> explains how we collect, use, disclose, holds and secures personal information.</p>
                        <p style="margin-top: 5px; margin-bottom: 5px;">Please do not reply to this email.</p>
                    </div>
                </div>
                `
            });
            res.json({
                success: true,
                msg: "Successfully registered, please check your email to activate.",
                user: user
            });
        }
    } catch (err) {
        res.json({
            success: false,
            msg: err.message
        });
    }
}
const googleSignUp = async (req, res) => {
    try {
        const { access_token: token } = req.body;
        let { data } = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${token}`, {
            headers: {
                "Accept-Encoding": "application/json"
            }
        });
        let salt = bcrypt.genSaltSync(10);
        let password = bcrypt.hashSync("123456789", salt);
        let user = await UserModel.findOne({ email: data.email });
        if (user) {
            res.json({
                success: false,
                msg: "The email already exists."
            });
        } else {
            user = await UserModel.create({
                firstName: data.given_name,
                lastName: data.family_name,
                email: data.email,
                status: true,
                password: password
            });
            let token = jwt.sign({
                userId: user._id, email: user.email
            }, "a1A!s2S@d3D#f4F$", {
                expiresIn: "24h"
            });
            res.json({
                status: true,
                user,
                token,
                msg: "Successfully registered"
            });
        }
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

const forgotPwd = async (req, res) => {
    try {
        let { email } = req.body;
        let buffer = await crypto.randomBytes(30);
        let token = buffer.toString('hex');
        let user = await UserModel.findOne({ email });
        if (user) {
            await PasswordVerifyModel.findOneAndUpdate({
                email: email
            }, {
                email: email,
                token: token
            }, {
                upsert: true
            });
            await sgMail.send({
                to: user.email,
                from: process.env.SENDGRID_USER,
                subject: "AnswerSheet - password reset",
                html: `
                <div style="background: #fafafa; font-family: sans-serif; max-width: 660px;">
                    <div style="padding: 10px; margin-bottom: 20px; background: #d6e4f1">
                        <img src="${process.env.HOSTNAME}/logo.png">
                    </div>
                    <div style="padding: 10px 20px; border-top: 2px solid #ebebeb; border-bottom: 2px solid #ebebeb;">
                        <h2 style="color: #005492;">Password reset</h2>
                        <p>Hi ${user.firstName}</p>
                        <p>Click below to reset your password.</p>
                        <div style="padding: 20px;">
                            <a href="${process.env.HOSTNAME}/reset-password/${token}" style="text-decoration: none; padding: 10px 30px; background: #005492; display: inline-block; color: #fafafa">Reset password</a>
                        </div>
                        <p>This link expires in 72 hours.</p>
                        <p>If you have any questions or didn't make this change, please contact us at support@answersheet.au</p>
                        <p>Sincerely,</p>
                        <p style="font-weight: 700;">The AnswerSheet team</p>
                    </div>
                    <div style="padding: 10px 20px; font-size: 12px;">
                        <p style="margin-top: 5px; margin-bottom: 5px;">© 2023 AnswerSheet Pty Ltd</p>
                        <p style="margin-top: 5px; margin-bottom: 5px;">Our <a href="${process.env.HOSTNAME}/privacy-policy">Privacy Policy</a> explains how we collect, use, disclose, holds and secures personal information.</p>
                        <p style="margin-top: 5px; margin-bottom: 5px;">Please do not reply to this email.</p>
                    </div>
                </div>
                `
            });
            res.json({
                status: true,
                msg: "We've emailed you a link to reset your password."
            });
        } else {
            res.json({
                status: false,
                msg: "The email is not registered."
            });
        }
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

const resetPwd = async (req, res) => {
    try {
        let { password, token } = req.body;
        let passwordVerify = await PasswordVerifyModel.findOne({ token });
        var today = moment();
        var createdAt = moment(passwordVerify.createdAt);

        if (passwordVerify) {
            if (today.diff(createdAt, "hours") <= 72) {
                let salt = bcrypt.genSaltSync(10);
                password = bcrypt.hashSync(password, salt);
                await UserModel.findOneAndUpdate({ email: passwordVerify.email }, { password: password });
                res.json({
                    status: true,
                    msg: "Successfully updated."
                });
            } else {
                res.json({
                    status: false,
                    msg: "Token is already expired"
                });
            }
        } else {
            res.json({
                status: false,
                msg: "Token is invalid."
            });
        }
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

const verifyEmail = async (req, res) => { // After registering, verify email.
    let { token } = req.params;
    let verify = await EmailVerifyModel.findOne({ token });
    if (verify) {
        let today = moment();
        let createdAt = moment(verify.createAt);
        if (today.diff(createdAt, "hours") <= 72) {
            await UserModel.findOneAndUpdate({
                email: verify.email
            }, { status: true });
            let user = await UserModel.findOne({ email: verify.email });
            let token = jwt.sign({
                userId: user._id, email: user.email
            }, "a1A!s2S@d3D#f4F$",
                {
                    expiresIn: "24h"
                });
    
            res.json({
                status: true,
                user,
                token,
                msg: "Registration complete."
            });
        } else {
            res.json({
                status: false,
                msg: "Token is already expired"
            });
        }
    } else {
        res.json({
            status: false,
            msg: "Verify token is not icorrect."
        });
    }
}

const login = async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await UserModel.findOne({ email });
        if (!user) {
            res.json({
                status: false,
                msg: "The user registered with that email does not exist."
            });
        } else if (!bcrypt.compareSync(password, user.password)) {
            res.json({
                status: false,
                msg: "The email and password combination did not match our records."
            });
        } else {
            if (!user.status) {
                res.json({
                    status: false,
                    msg: "You need to verify your email to log in."
                });
            } else {
                let token = jwt.sign({
                    userId: user._id, email: user.email
                }, "a1A!s2S@d3D#f4F$",
                    {
                        expiresIn: "24h"
                    });
                res.json({
                    status: true,
                    user,
                    token,
                    msg: "Successfully logged in."
                });
            }
        }
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

const googleLogin = async (req, res) => {
    try {
        const { access_token: token } = req.body;
        let { data } = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${token}`, {
            headers: {
                "Accept-Encoding": "application/json"
            }
        });
        let user = await UserModel.findOne({ email: data.email });
        if (user) {
            if (!user.status) {
                res.json({
                    status: false,
                    msg: "You need to verify your email to log in."
                });
            } else {
                let token = jwt.sign({
                    userId: user._id, email: user.email
                }, "a1A!s2S@d3D#f4F$", {
                    expiresIn: "24h"
                });
                res.json({
                    status: true,
                    user,
                    token,
                    msg: "Successfully logged in."
                });
            }
        } else {
            res.json({
                status: false,
                msg: "The user is not a registered user. Please register to login in."
            });
        }
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        })
    }
}

const updateProfile = async (req, res) => {
    try {
        let { id } = req.params;
        let user = req.body;
        await UserModel.findByIdAndUpdate(id, user);
        let result = await UserModel.findById(id);
        res.json({
            status: true,
            data: result,
            msg: "Successfully updated."
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

const updatePassword = async (req, res) => {
    try {
        let { id } = req.params;
        let { password } = req.body
        let salt = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(password, salt);
        let result = await UserModel.findByIdAndUpdate(id, { password });
        res.json({
            status: true,
            data: result,
            msg: "Successfully updated."
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

module.exports = {
    register,
    verifyEmail,
    forgotPwd,
    resetPwd,
    login,
    googleSignUp,
    googleLogin,
    updateProfile,
    updatePassword
}