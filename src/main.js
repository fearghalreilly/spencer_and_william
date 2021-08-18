const algoliasearch = require('algoliasearch');


const client = algoliasearch('LLBWRPVKR3', 'dab1fffbfd435fcf9b96d5fec3d45426');
const index = client.initIndex('spencerandwilliams');

const objects = require('./data/products.json');

index.saveObjects(objects);