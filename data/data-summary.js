const fs = require('fs');
const utils = require('../utils/utils.js');


const dataSummary = (products, listings) => {

  console.log('Running analysis on input first');
  logManufacturers(products, listings);


};

// fn to look at distinct manufacturers of both products and listings
const logManufacturers = (products, listings) => {
  const manufacturers = utils.getDistinctValues(products, 'manufacturer').map(item => {return item.toLowerCase();});
  utils.logItems(manufacturers, './data/manufacturers/manufacturers.txt');

  const listedManufacturers = utils.getDistinctValues(listings, 'manufacturer').map(item => {return item.toLowerCase();});
  utils.logItems(listedManufacturers, './data/manufacturers/listed-manufacturers.txt');

  const permittedManufacturers = listedManufacturers.filter((man) => {
    return manufacturerPermitted(man, manufacturers);
  });
  utils.logItems(permittedManufacturers, './data/manufacturers/permitted-manufacturers.txt');

};

// fn to account for edge cases and permit some variance in manufacturer name
const manufacturerPermitted = (man, manufacturers) => {
  // for a given listed manufacturer name, determine if it has an acceptable match
  const words = man.split(' ');
  if (words.length > 1) {
    // check if manufacturer contains a permitted manufacturer
    const matchedWords = words.filter((word) => {
      return manufacturers.includes(word);
    });
    if (matchedWords.length > 0) {
      return true;
    }
  }
  return manufacturers.includes(man);
};





module.exports = {dataSummary};
