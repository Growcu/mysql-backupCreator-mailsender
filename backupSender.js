const nodemailer = require('nodemailer');

const sendBackup = async function() {

    let transporter = nodemailer.createTransport({
        host: `${process.env.HOST}`,
        port: 465,
        secure: true,
        auth: {
            user: process.env.SENDER_USER,
            pass: process.env.SENDER_PASS,
        },
    });

    let info = await transporter.sendMail({
        from: `"BackUps" <${process.env.SENDER_USER}>`,
        to: process.env.RECIPIENT,
        subject: "Database backup last week",
        text: "Download file below and save in protected place",
        attachments: [
            {
                filename: 'DB_BACKUP.sql',
                path: './Backup/DB_Backup',
            }
        ]
    });

    console.log("Message sent: %s", info.messageId);
}

sendBackup().catch(console.error);

exports.sendBackup = sendBackup;

