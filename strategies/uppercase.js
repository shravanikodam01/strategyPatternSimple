const TextFormatStrategy = require('./textFormatStrategy')

class UpperCaseStrategy extends TextFormatStrategy {
    format(text) {
      return text.toUpperCase();
    }
  }
  
  module.exports = UpperCaseStrategy;