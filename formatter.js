class TextFormatter{
    constructor(strategy){
        this.strategy = strategy
    }
    setStrategy(strategy){
        this.strategy = strategy
    }

    format(text){
        return this.strategy.format(text)
    }
}

module.exports = TextFormatter