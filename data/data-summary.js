const fs = require('fs');
const utils = require('../utils/utils.js');

console.log('Running analysis on input first');

// read products
// generate a list of all distinct manufacturers
const products = utils.getInputData('products.txt');

const manufacturers = utils.getDistinctValues(products, 'manufacturer');
utils.logItems(manufacturers, './manufacturers.txt');



module.exports = {};
