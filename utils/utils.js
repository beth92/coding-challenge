const fs = require('fs');

// fn to read list of JSON objects delimited by \n from file
const getInputData = (file) => {
  if(!fs.existsSync(file)){
    return `File not found: ${file}`;
  }
  return fs.readFileSync(file, 'utf8').split('\n').filter((item) => {
    return (item !== '');
  }).map(JSON.parse);
};

// fn to print array to file using \n delimiter
const logItems = (items, filename) => {
  const fd = fs.openSync(filename, 'w');
  const itemsString = items.reduce((accum, item) => {
    return `${accum}${item}\n`;
  }, '');
  fs.appendFileSync(fd, itemsString);
  fs.closeSync(fd);
};


module.exports = {getInputData, logItems};
