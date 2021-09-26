const path = require('path');

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /react-spring/,
      sideEffects: true,
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
