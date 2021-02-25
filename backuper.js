const fs = require('fs');
const { spawn } = require('child_process');
const wstream = fs.createWriteStream('./Backup/DB_Backup');

let mysqldump = spawn('mysqldump', [
    `--single-transaction`,
    `--host=${process.env.MYSQL_HOST}`,
    `--port=${process.env.MYSQL_PORT}`,
    `--user=${process.env.MYSQL_USER}`,
    `--password=${process.env.MYSQL_PASSWORD}`,
    process.env.DB_NAME,
])

const makeBackUp = function() {
    mysqldump
        .stdout
        .pipe(wstream)
        .on('finish', () => console.log('Backup Completed'))
        .on('error', (error) => console.log(error))
}

exports.makeBackUp = makeBackUp;