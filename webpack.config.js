
// webpack.config.js
const path = require('path');

module.exports = {
  // ... (votre configuration existante)

  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    }
  },
};
