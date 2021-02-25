const nodemailer = require('nodemailer');

const sendBackup = async function() {
    const currnetDate = new Date();
    const time = {
        month: currnetDate.getMonth(),
        day: currnetDate.getDate()
    }

    if(time.month<10) time.month = `0${time.month}`;
    if(time.day<10) time.day = `0${time.day}`

    let transporter = nodemailer.createTransport({
        host: `${process.env.MAIL_HOST}`,
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
        subject: "Database backup",
        text: "Download file below and save in protected place",
        attachments: [
            {
                filename: `DB_BACKUP_${time.day}-${time.month}.sql`,
                path: './Backup/DB_Backup',
            }
        ]
    });

    console.log("Message sent: %s", info.messageId);
}

exports.sendBackup = sendBackup;