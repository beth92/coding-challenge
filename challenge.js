// local imports
const utils = require('./utils/utils');
const {findCameras} = require('./cameras/find-cameras');
const {findMatches} = require('./matches/find-matches');

const listings = utils.getInputData('./listings.txt');
const products = utils.getInputData('./products.txt');

if(process.argv[2] && process.argv[2] == '-d') {
  require('./data/data-summary');
}

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

const results = findMatches(cameras, products);
