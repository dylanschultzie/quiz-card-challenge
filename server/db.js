const fs = require('fs');
const rawFile = fs.readFileSync('database.json');
const db = JSON.parse(rawFile);

module.exports = db;
