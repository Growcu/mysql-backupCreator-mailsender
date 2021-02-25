require('dotenv').config();
const { makeBackUp } = require('./backuper');
const { sendBackup } = require('./backupSender');

function main() {
    makeBackUp();
    sendBackup().catch(console.error);
}
main();



