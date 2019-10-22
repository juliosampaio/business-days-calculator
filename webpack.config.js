const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'business-days-calculator.js',
    library: 'businessDaysCalculator',
    libraryTarget: 'umd'
  }
};
