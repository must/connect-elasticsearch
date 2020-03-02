const { Client } = require('@elastic/elasticsearch')
const platform = require('connect-platform');

let options = platform.config.get('elasticsearch', {});

let client = {};

if(Object.keys(options).length == 0) {
  console.error("Connect-elasticsearch package wasn't configured");
} else {
  client = new Client(options);
}

module.exports = client;