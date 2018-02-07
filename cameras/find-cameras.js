const fs = require('fs');

// this fn accepts an array of objects and decides whether or not it represents a camera
const findCameras = (listings, rejectsFile) => {

  console.log(`Checking ${listings.length} listings for cameras.`);
  const fd = fs.openSync(rejectsFile, 'w');
  const permittedManufacturers = getManufacturers();

  const cameras = listings.filter((listing) => {
    if(checkManufacturer(listing.manufacturer, permittedManufacturers) && checkTitle(listing.title)) {
      return true;
    }
    logReject(listing, fd);
    return false;
  });
  fs.closeSync(fd);
  return cameras;

};

const logReject = (reject, fd) => {
  // print non-camera to file for validation of checking algorithm
  fs.appendFileSync(fd, JSON.stringify(reject) + '\n');
};

const checkTitle = (title) => {
  // hacky methods to check listing title for red flags
  if(title.toLowerCase().split(' ').indexOf('for') !== -1) {
    return false;
  }
  return true;
};

const getManufacturers = () => {
  return fs.readFileSync('./data/manufacturers/permitted-manufacturers.txt', 'utf-8').split('\n');

};

const checkManufacturer = (man, permittedManufacturers) => {
  if (permittedManufacturers.includes(man.toLowerCase())) {
    return true;
  }
  return false;
};

module.exports = {findCameras};
