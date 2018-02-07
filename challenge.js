// local imports
const utils = require('./utils/utils');
const {dataSummary} = require('./data/data-summary');
const {findCameras} = require('./cameras/find-cameras');
const {findMatches} = require('./matches/find-matches');
const path = require('path');

const listingsPath = process.argv[2];
const productsPath = process.argv[3];

if(!listingsPath || !productsPath) {
  console.log('Usage: node challenge.js [listings] [products]');
  process.exit(1);
}

const listings = utils.getInputData(path.resolve(listingsPath));
const products = utils.getInputData(path.resolve(productsPath));

dataSummary(products, listings);

// retrieve listings filtered for items that are likely not cameras
const cameras = findCameras(listings, './cameras/rejects.txt');

console.log(`Found ${cameras.length} cameras`);

const results = findMatches(cameras, products);

utils.logItems(results.map(JSON.stringify), './results.txt');
