const expect = require('expect');
const utils = require('../utils/utils.js');

describe('Test utils functions', () => {
  it('should sanitize a string', () => {
    const res = utils.sanitize('tkdfuvbau%$984hc64$_ncaue%$');
    expect(res).toBe('tkdfuvbau984hc64_ncaue');
  });

  it('should determine if two strings have a word in common', () => {
    const s1 = 'SONY CANADA';
    const s2 = 'sony';
    const s3 = 'nikon cameras';
    expect(utils.wordInCommon(s1, s2)).toBe(true);
    expect(utils.wordInCommon(s2, s3)).toBe(false);
  });

  it('should find distinct values in an array', () => {
    const testArr = [{
      manufacturer: 'sony',
      price: 125
    }, {
      manufacturer: 'nikon',
      price: 90
    }, {
      manufacturer: 'sony',
      price: 154
    }, {
      manufacturer: 'panasonic',
      price: 125
    }];
    expect(utils.getDistinctValues(testArr, 'manufacturer')).toEqual(['sony', 'nikon', 'panasonic']);
  });
});
