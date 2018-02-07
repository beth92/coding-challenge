const expect = require('expect');
const utils = require('../utils/utils.js');

describe('Test utils functions', () => {
  it('should sanitize a string', () => {
    const res = utils.sanitize('tkdfuvbau%$984hc64$_ncaue%$');
    expect(res).toBe('tkdfuvbau984hc64_ncaue');
  });
});
