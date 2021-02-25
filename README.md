# mysql-backupCreator-mailsender
Create MySQL database backup and send them to your email
## Installation
Clone repositry and run:
```bash
npm install
```
Create .env file and write there:
```
MYSQL_USER = <Your DB user>
MYSQL_HOST = <Your DB host>
MYSQL_PORT = <Your DB port>
MYSQL_PASSWORD = <Your DB password>
DB_NAME = <Your DB name>

MAIL_HOST = <Your e-mail host>
SENDER_USER = <Your e-mail>
SENDER_PASS = <Your password to e-mail>
RECIPIENT = <Your mail where you want to backup>
```
In root folder create Backup folder:
```bash
mkdir Backup
```
When you are ready, run: 
```bash
npm run send
```
## Problems
* If you have problem with backup, check your privileges in mysql database
* If you have problem with sending, check your user name, password and e-mail host:
```bash
nslookup <e-mail host>
```
