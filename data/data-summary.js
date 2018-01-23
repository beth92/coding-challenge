/* jshint esversion: 6 */

const fs = require('fs');
const path = require('path');

// const dataSummary = () => {
//
//   return new Promise((resolve, reject) => {
//     getListings('./data/listings.txt').then((listings) => {
//       resolve(listings);
//     }, (err) => {
//       console.log('Error getting listings:', err);
//       reject(err);
//     });
//   });
// };

const getInputData = (file) => {
  if(fs.existsSync(file)){
    return fs.readFileSync(file, 'utf8').split('\n').filter((item) => {
      return (item !== '');
    }).map(JSON.parse);
  }
  return `File not found: ${file}`;
};

module.exports = {getInputData};
