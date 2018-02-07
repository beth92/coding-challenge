// local imports
const utils = require('./utils/utils');
const {findCameras} = require('./cameras/find-cameras');
const {findMatches} = require('./matches/find-matches');

const listings = utils.getInputData('./listings.txt');
const products = utils.getInputData('./products.txt');

if(typeof listings === 'string'){
  console.log(`Error: ${listings}`);
  process.exit(1);
} else if(typeof products === 'string') {
  console.log(`Error: ${products}`);
  process.exit(1);
}

if(process.argv.includes('-d')) {
  const {dataSummary} = require('./data/data-summary');
  dataSummary(products, listings);
}

// retrieve listings filtered for items that are likely not cameras
const cameras = findCameras(listings, './cameras/rejects.txt');
console.log(`Found ${cameras.length} cameras`);

findMatches(cameras, products);
