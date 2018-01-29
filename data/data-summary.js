/* jshint esversion: 6 */

const fs = require('fs');
const path = require('path');

const getInputData = (file) => {
  if(!fs.existsSync(file)){
    return `File not found: ${file}`;
  }
  return fs.readFileSync(file, 'utf8').split('\n').filter((item) => {
    return (item !== '');
  }).map(JSON.parse);
};

module.exports = {getInputData};
