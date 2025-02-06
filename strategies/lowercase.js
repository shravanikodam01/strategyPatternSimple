const TextFormatStrategy = require('./textFormatStrategy')

class LowerCaseStrategy extends TextFormatStrategy {
    format(text) {
      return text.toLowerCase();
    }
  }
  
  module.exports = LowerCaseStrategy;