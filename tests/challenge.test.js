const expect = require('expect');
const {findCameras} = require('../cameras/find-cameras');
const utils = require('../utils/utils.js');

describe('Test coding challenge', () => {

  const testProducts = utils.getInputData('./tests/test-products.txt');

  it('should correctly retrieve the input data', () => {
    expect(testProducts).toContainEqual({
      "product_name":"Samsung-ES70",
      "manufacturer":"Samsung",
      "model":"ES70",
      "announced-date":"2009-01-07T19:00:00.000-05:00"
    });
    expect(testProducts.length).toBe(5);
  });

  const cameras = findCameras(utils.getInputData('./tests/test-listings.txt'), './tests/test-rejects.txt');

  it('should reject accessories', () => {
    expect(cameras).not.toContainEqual({
      "title":"DURAGADGET Padded Camera Bag With Shoulder Strap & Zip Pockets For Go Pro Hero HD Head Cams (Helmet Hero, Motorsports Hero, Surf Hero)",
      "manufacturer":"DURAGADGET",
      "currency":"CAD",
      "price":"29.99"
    });
  });

  it('should identify cameras', () => {
    expect(cameras).toContainEqual({
      "title":"Fujifilm FinePix XP10 12 MP Waterproof Digital Camera with 5x Optical Zoom and 2.7-Inch LCD (Blue)",
      "manufacturer":"Fujifilm Canada",
      "currency":"CAD",
      "price":"171.30"
    });
  });

  it('should reject listings with unrecognized manufacturers', () => {
    expect(cameras).not.toContainEqual({
      "title":"Slide and Negative Scanner",
      "manufacturer":"Jobar International",
      "currency":"CAD",
      "price":"48.28"
    });
  });
});
