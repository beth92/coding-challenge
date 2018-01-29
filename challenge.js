/* jshint esversion: 6 */

// local imports
const data = require('./data/data-summary');
const {findCameras} = require('./cameras/find-cameras');

const listings = data.getInputData('./data/listings.txt');
const products = data.getInputData('./data/products.txt');

if(typeof listings === 'string'){
  console.log(`Error: ${listings}`);
  process.exit(1);
} else if(typeof products === 'string') {
  console.log(`Error: ${products}`);
  process.exit(1);
}

// retrieve listings filtered for items that are likely not cameras
const cameras = findCameras(listings);
console.log(`Found ${cameras.length} cameras`);
