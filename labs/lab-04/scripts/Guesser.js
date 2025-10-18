class Guesser {
    constructor () {
        this.hundreds = 0;
        this.tens = 0;
        this.ones = 0;
    }

    increment(key) {
        this[key] = (this[key] < 9) ? this[key]+1 : 0;
    }

    decrement(key){
        this[key] = (this[key] > 0) ? this[key]-1 : 9;
    }

    toString() {
        return "" + this.hundreds + this.tens + this.ones;
    }
}