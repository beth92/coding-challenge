const fs = require('fs');

const findMatches = (cameras, products) => {
  const results = [];
  products.forEach((product, index) => {
    results.push({
      product_name: product.product_name,
      listings: []
    });
    cameras.forEach((camera) => {
      // TODO decide if camera matches product
      const match = Math.random() < 0.01;
      if(match) {
        results[index].listings.push(camera);
      }
    });

  });
  logResults(results);
};

const logResults = (results) => {
  const fd = fs.openSync('./results.txt', 'w');
  results.forEach((result) => {
    fs.appendFileSync(fd, `${JSON.stringify(result)}\n`);
  });
  fs.closeSync(fd);
};


module.exports = {findMatches};
