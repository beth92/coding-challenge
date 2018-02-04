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



// const results = [];
// products.forEach((product, index) => {
//   results.push({
//     product_name: product.product_name,
//     listings: []
//   });
//   cameras.forEach((camera) => {
//     // decide if camera matches product
//     // if so define match as true
//     // check if manufacturers match
//     // check if model is in listing title
//     if(camera.title.toLowerCase().indexOf(product.model.toLowerCase()) !== -1) {
//       if(camera.manufacturer.toLowerCase().indexOf(product.manufacturer.tolowerCase()) != -1){
//         const match = true;
//       }
//     }
//     if(match) {
//       results[index].listings.push(camera);
//     }
//   });
//
// });
// logResults(results);
