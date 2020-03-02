const platform = require('connect-platform');
const client = require('./instance');

platform.core.node({
  path: '/elasticsearch/update',

  public: false,
  method: 'PUT',

  inputs: ['params'],
  outputs: [
    'result',
    'error'
  ],

  controlOutputs: [],

  hints: {
    node: 'Executes an update operation on an index on the elasticsearch cluster with <span class="hl-blue">params</span>.',

    inputs: {
      params: 'The parameters to be used.',
    },

    outputs: {
      result: 'The <span class="hl-blue">result</span>.',
      error: 'The <span class="hl-blue">error</span> when applicable.'
    },

    controlOutputs: {}
  }
},
  (inputs, output, control) => {
    client.update(inputs.params, (err, result) => {
      if (err) {
        console.log(err);
        output('error', err);
      }

      output('result', result);
    });
  }
);
