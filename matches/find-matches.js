const utils = require('../utils/utils');

const findMatches = (cameras, products) => {

  console.log(`Checking ${cameras.length} cameras for matches`);

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
  return results;

};


const isMatch = (camera, product) => {
  if( modelInTitle(product.model, camera.title) && manufacturersMatch(camera, product)) {
    return true;
  }
  return false;
};

const modelInTitle = (model, title) => {
  if(utils.sanitize(title).indexOf(utils.sanitize(model)) !== -1) {
    return true;
  }
  else return false;
};

const manufacturersMatch = (camera, product) => {
  // return true if the listed manufacturer matches the product manufacturer
  // or if the product's manufacturer is in the title of listing
  if (utils.wordInCommon(camera.manufacturer, product.manufacturer) || utils.sanitize(camera.title).indexOf(product.manufacturer) !== -1) {
    return true;
  }
  return false;
};

module.exports = {findMatches};
