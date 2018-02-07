const expect = require('expect');
const {findCameras} = require('../cameras/find-cameras');
const {findMatches} = require('../matches/find-matches');
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
    // TODO: determine length
    // expect(testProducts.length).toBe(5);
  });

  const testCameras = findCameras(utils.getInputData('./tests/test-listings.txt'), './tests/test-rejects.txt');

  it('should reject accessories', () => {
    expect(testCameras).not.toContainEqual({
      "title":"DURAGADGET Padded Camera Bag With Shoulder Strap & Zip Pockets For Go Pro Hero HD Head Cams (Helmet Hero, Motorsports Hero, Surf Hero)",
      "manufacturer":"DURAGADGET",
      "currency":"CAD",
      "price":"29.99"
    });
  });

  it('should identify cameras', () => {
    expect(testCameras).toContainEqual({
      "title":"Fujifilm FinePix XP10 12 MP Waterproof Digital Camera with 5x Optical Zoom and 2.7-Inch LCD (Blue)",
      "manufacturer":"Fujifilm Canada",
      "currency":"CAD",
      "price":"171.30"
    });
  });

  it('should reject listings with unrecognized manufacturers', () => {
    expect(testCameras).not.toContainEqual({
      "title":"Slide and Negative Scanner",
      "manufacturer":"Jobar International",
      "currency":"CAD",
      "price":"48.28"
    });
  });

  it('should not match two different cameras', () => {
    const wrongListing = {
      "title":"Panasonic Lumix DMC-FP1 12.1 MP Digital Camera with 4x Optical Image Stabilized Zoom and 2.7-Inch LCD (Pink)",
      "manufacturer":"Panasonic",
      "currency":"CAD",
      "price":"149.47"
    };
    const wrongProduct = "Sony-WX7";
    const res = findMatches(testCameras, testProducts);
    expect(res).not.toContainEqual({
      "product_name": wrongProduct,
      listings: expect.arrayContaining(wrongListing)
    });
  });

  it('should match two of the same cameras', () => {
    const rightListing = {
      "title":"Canon PowerShot ELPH 500 HS 12 MP CMOS Digital Camera with Full HD Video and Ultra Wide Angle Lens (Silver)",
      "manufacturer":"Canon",
      "currency":"USD",
      "price":"299.00"
    };
    const rightProduct = "Canon-ELPH-500HS";
    const res = findMatches(testCameras, testProducts);
    // TODO: fix this assertion
    // expect(res).toMatchObject({
    //   "product_name": rightProduct,
    //   listings: expect.arrayContaining(rightListing)
    // });
  });

});
