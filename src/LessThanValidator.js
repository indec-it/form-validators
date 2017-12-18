
const Validator = require('./Validator');

class LessThanValidator extends Validator {

    constructor(arg) {
        super();
        this._arg = arg;
        this.errorMessage = 'Must be less than ';
    }

    get arg() {
        return this._arg;
    }

    isValid(value) {
        return value < this.arg;
    }
}

module.exports = LessThanValidator;


