function Calculator() {
    this.result = 0;

    this.add = function(val) {
        this.result += val;
        return this;
    }

    this.subtract = function(val) {
        this.result -= val;
        return this;
    }

    this.multiply = function(val) {
        this.result *= val;
        return this;
    }

    this.divide = function(val) {
        if(val === 0) {
            console.log("Division with 0 is prohibited")
            return this;
        }
        this.result /= val;
        return this;
    }

    this.getResult = function() {
        return this.result;
    }
}

const c1 = new Calculator();
const value = c1.add(100).subtract(20).subtract(20).multiply(1.5).divide(3).getResult();
console.log(value);