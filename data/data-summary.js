const fs = require('fs');
const utils = require('../utils/utils.js');


const dataSummary = (products, listings) => {

  console.log('Running analysis on input first');

  logManufacturers(products, listings);

  logModels(products);
};




// fn to look at distinct manufacturers of both products and listings
const logManufacturers = (products, listings) => {
  const manufacturers = utils.getDistinctValues(products, 'manufacturer');
  utils.logItems(manufacturers, './data/manufacturers/manufacturers.txt');

  const listedManufacturers = utils.getDistinctValues(listings, 'manufacturer');
  utils.logItems(listedManufacturers, './data/manufacturers/listed-manufacturers.txt');

  const permittedManufacturers = listedManufacturers.filter((man) => {
    return manufacturerPermitted(man, manufacturers);
  });
  utils.logItems(permittedManufacturers, './data/manufacturers/permitted-manufacturers.txt');

};

// fn to account for edge cases and permit some variance in manufacturer name
const manufacturerPermitted = (man, manufacturers) => {
  // for a given listed manufacturer name, determine if it has an acceptable match
  // TODO: refactor utils fn so I don't have to join here 
  return utils.wordInCommon(man, manufacturers.join(' '));
};

const logModels = (products) => {
  const models = utils.getDistinctValues(products, 'model');
  utils.logItems(models, './data/models/models.txt');
};


module.exports = {dataSummary};
