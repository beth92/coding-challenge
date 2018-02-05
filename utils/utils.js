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

// fn to extract distinct values of a property from an array of objects
const getDistinctValues = (items, prop) => {
  return items.reduce((accum, item) => {
    if(accum.includes(item[prop])){
      return accum;
    }
    return [...accum, item[prop]];
  }, []);
};


module.exports = {getInputData, logItems, getDistinctValues};
