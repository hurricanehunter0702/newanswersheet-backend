const MessageModel = require("../models/MessageModel");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const create = async (req, res) => {
    try {
        let data = req.body;
        console.log(data)
        // let message = await MessageModel.create(data);
        // await sgMail.send({
        //     // to: 'support@answersheet.au',
        //     to: 'hurricanehunter0702@gmail.com',
        //     from: process.env.SENDGRID_USER,
        //     subject: "AnswerSheet - Contact us enquiry",
        //     html: `
        //     <div style="background: #fafafa; font-family: sans-serif; max-width: 660px; margin: auto">
        //         <div style="padding: 10px; margin-bottom: 20px; background: #d6e4f1">
        //             <img src="${process.env.HOSTNAME}/logo.png"/>
        //         </div>
        //         <div style="padding: 10px 20px; border-top: 2px solid #ebebeb; border-bottom: 2px solid #ebebeb;">
        //             <h2 style="color: #005492;"><Nature of Enquiry> Enquiry</h2>
        //             <p>Enquiry from <name> received on <dd/mm/yy></p>
        //             <p>${message.message}</p>
        //         </div>
        //         <div style="padding: 10px 20px; font-size: 12px;">
        //             <p style="margin-top: 5px; margin-bottom: 5px;">&copy; 2023 AnswerSheet Pty Ltd</p>
        //             <p style="margin-top: 5px; margin-bottom: 5px;">Our <a href="${process.env.HOSTNAME}/privacy-policy">Privacy Policy</a> explains how we collect, use, disclose, holds and secures personal information.</p>
        //             <p style="margin-top: 5px; margin-bottom: 5px;">Please do not reply to this email.</p>
        //         </div>
        //     </div>
        //     `
        // });
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