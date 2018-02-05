const fs = require('fs');
const utils = require('../utils/utils');

const findMatches = (cameras, products) => {
  const results = products.reduce((accum, product) => {
    const listings = cameras.filter((camera) => {
      // run tests
      return isMatch(camera, product);
    });
    return [...accum, {
      product_name: product.product_name,
      listings
    }];
  }, []);
  const resultsItems = results.map(JSON.stringify);
  utils.logItems(resultsItems, './results.txt');
};


const isMatch = (camera, product) => {
  if(camera.title.toLowerCase().indexOf(product.model.toLowerCase()) !== -1) {
    if(camera.manufacturer.toLowerCase().indexOf(product.manufacturer.toLowerCase()) !== -1){
      return true;
    }
  }
  return false;
};


module.exports = {findMatches};
