/* jshint esversion: 6 */

const fs = require('fs');

// this fn accepts an array of objects and decides whether or not it represents a camera
const findCameras = (listings) => {
  const fd = fs.openSync('./cameras/rejects.txt', 'w');
  console.log(`Checking ${listings.length} listings for cameras.`);
  return listings.filter((listing, index) => {
    if(!checkTitle(listing.title)) {
      logReject(listing, fd);
      return false;
    }
    // if this listing passed the tests:
    return true;
  });
};

const logReject = (reject, fd) => {
  // print non-camera to file for validation of checking algorithm
  fs.appendFileSync(fd, JSON.stringify(reject) + '\n');
};

const checkTitle = (title) => {
  // hacky methods to check listing title for red flags
  if(title.toLowerCase().split(' ').slice(0, 3).indexOf('battery') !== -1 ) {
    return false;
  } else if(title.split(' ').indexOf('for') !== -1) {
    return false;
  }
  return true;
};

module.exports = {findCameras};
