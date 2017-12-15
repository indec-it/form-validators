
const Validator = require('./Validator');

class GreaterThanValidator extends Validator {

    constructor(arg) {
        super();
        this._arg = arg;
        this.errorMessage = 'Must be greater than ';
    }

    get arg() {
        return this._arg;
    }

    isValid(value) {
        return value > this.arg;
    }
}

module.exports = GreaterThanValidator;
