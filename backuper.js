const fs = require('fs');
const { spawn } = require('child_process');
const wstream = fs.createWriteStream('./Backup/DB_Backup');

const makeBackUp = function() {
        spawn('/opt/lampp/bin/mysqldump', [
            '-u',
            'root',
            'instalacje'
        ])
        .stdout
        .pipe(wstream)
        .on('finish', () => console.log('Backup Completed'))
        .on('error', (error) => console.log(error))
}

exports.makeBackUp = makeBackUp;