/**
 *
 * so this is where you define the package details for CONNECT platform.
 * these details are confined to 'module.exports.platform', to allow for packages
 * that would work outside of the context of CONNECT platform as well.
 *
 */
module.exports.platform = {
  config: {
    nodes : {
      native : [
        'index-node',
        'search',
        'delete',
        'indices/delete',
        'update'
      ]
    },
    
    aliases: {
      '/es/index': '/elasticsearch/index',
      '/es/search': '/elasticsearch/search',
      '/es/delete': '/elasticsearch/delete',
      '/es/indices/delete': '/elasticsearch/indices/delete',
      '/es/update': '/elasticsearch/update',
    }
  },
  hints: {
    setup:
`First, you need an elasticsearch cluster. Then configure accordignly. <a href="https://github.com/elastic/elasticsearch-js">More information</a>.
For full documentation of the API refer to <a href="elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html">this link</a>.`,
    sampleConfig: {
      node: 'http://localhost:9200'
    }
  }
}