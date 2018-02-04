const fs = require('fs');

const findMatches = (cameras, products) => {
  const fd = fs.openSync('./results.txt', 'w');
  products.forEach((product) => {
    const listings = cameras.filter((camera) => {
      // run tests
      return isMatch(camera, product);
    });
    const result = {
      product_name: product.product_name,
      listings
    };
    logResult(result, fd);
  });
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
