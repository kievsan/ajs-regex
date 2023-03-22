const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.config.js');

const developmentConfig = require('./webpack.development.config.js');

const productionConfig = require('./webpack.production.config.js');

module.exports = (env) => {
  if (env.development) {
    return merge(commonConfig, developmentConfig);
  }
  return merge(commonConfig, productionConfig);
};
