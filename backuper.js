const fs = require('fs');
const { spawn } = require('child_process');
const wstream = fs.createWriteStream('./Backup/DB_Backup');

const makeBackUp = function() {
        spawn('mysqldump', [
            '--single-transaction',
            '-u',
            process.env.DB_USER,
            process.env.DB_NAME,
        ])
        .stdout
        .pipe(wstream)
        .on('finish', () => console.log('Backup Completed'))
        .on('error', (error) => console.log(error))
}

exports.makeBackUp = makeBackUp;