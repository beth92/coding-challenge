# Coding Challenge

## How to run

Requires version 8 of Node JS. Run by executing: <br>

`node challenge.js <listings> <products>`

where listings and products specify the .txt files to use as input. File results.txt will be generated in the current working directory.

## Run tests

Execute `npm test`. To watch for changes, run `npm run test-watch` (requires nodemon).

## Description

### challenge.js

This is the main module which executes the following functions:

#### dataSummary

This function examines the input data. It has two purposes: I used it first to help me decide how to design my solution (eg. by examining the different models available in products.txt). <br> It also produces some results to be used later as follows: First this function generates a list of the distinct manufacturers available in products.txt and then a list of the distinct manufacturers in the listings. It then generates a list of 'permitted' listed manufacturers, whose names can be considered as an alternative to a product manufacturer (eg. 'pentax canada' is considered a reasonable alternative to 'pentax'). <br>

### findCameras

This function filters out listings which do not contain a recognized manufacturer (according to the permitted manufacturers described above) or do not appear to represent a camera.

### findMatches

Under the assumption that the listings passed into this function represent cameras, matches are determined between products and listings. In order to match a given listing with a product, two criteria must be met: the product's 'model' property must be contained within the title string of the listing and the product's manufacturer must be either equal to the listing manufacturer or present in the listing title.
