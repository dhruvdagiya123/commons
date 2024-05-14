const fs = require('fs');

const configData = fs.readFileSync('./config.json', 'utf-8');
const config = JSON.parse(configData);
module.exports = config;