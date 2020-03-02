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
      native : ['index-node']
    },
    
    aliases: {
      '/es/index': '/elasticsearch/index',
    }
  },
  hints: {
    setup:
`First, you need an elasticsearch cluster. Then configure accordignly. <a href="https://github.com/elastic/elasticsearch-js">More information</a>.`,
    sampleConfig: {
      node: 'http://localhost:9200'
    }
  }
}