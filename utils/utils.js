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

// fn to extract distinct values of a string property from an array of objects
const getDistinctValues = (items, prop) => {
  return items.reduce((accum, item) => {
    const val = sanitize(item[prop]);
    if(accum.includes(val)){
      return accum;
    }
    return [...accum, sanitize(val)];
  }, []);
};

// sanitize string fn
const sanitize = (s) => {
  // do not permit non-word characters except -
  return s.toLowerCase().replace(/[^A-Za-z-_0-9\s]/g, '');
};

// check if any words in a string are contained in another string
const wordInCommon = (s1, s2) => {
  return sanitize(s1).split(' ').some( (word) => {
    return sanitize(s2).split(' ').includes(word);
  });
};

module.exports = {getInputData, logItems, getDistinctValues, sanitize, wordInCommon};
