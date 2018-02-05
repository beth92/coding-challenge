const fs = require('fs');

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
  logResults(results, './results.txt');
};

const logResults = (results, filename) => {
  const fd = fs.openSync(filename, 'w');
  const resultsString = results.reduce((accum, result) => {
    return `${accum}\n${JSON.stringify(result)}`;
  }, '');
  fs.appendFileSync(fd, resultsString);
  fs.closeSync(fd);
};



const logResult = (result, fd) => {
    fs.appendFileSync(fd, `${JSON.stringify(result)}\n`);
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
