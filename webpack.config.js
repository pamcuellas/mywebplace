const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
   	new TerserPlugin({
          terserOptions: {
            keep_fnames: true,
            compress: false
          }
        })
    ],
  },
};

