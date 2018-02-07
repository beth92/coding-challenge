// local imports
const utils = require('./utils/utils');
const {findCameras} = require('./cameras/find-cameras');
const {findMatches} = require('./matches/find-matches');

const listings = utils.getInputData('./listings.txt');
const products = utils.getInputData('./products.txt');

if(process.argv.includes('-d')) {
  const {dataSummary} = require('./data/data-summary');
  dataSummary(products, listings);
}

// retrieve listings filtered for items that are likely not cameras
const cameras = findCameras(listings, './cameras/rejects.txt');

console.log(`Found ${cameras.length} cameras`);

const results = findMatches(cameras, products);

utils.logItems(results, './results.txt');
