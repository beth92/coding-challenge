/* jshint esversion: 6 */

const fs = require('fs');

// local imports
const data = require('./data/data-summary');


// data.dataSummary().then( (listings) => {
//   console.log(listings.length);
// }, (err) => {
//   console.log('Error parsing data: ', err);
//   process.exit(1);
// });
//
// console.log('Retrieving listings');

const listings = data.getInputData('./data/listings.txt');
const products = data.getInputData('./data/products.txt');

if(typeof listings === 'string'){
  console.log(`Error: ${listings}`);
  process.exit(1);
}

console.log(listings[0]);
