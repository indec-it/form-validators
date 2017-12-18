
const _ = require('lodash');
const Validator = require('./Validator');

class NotEqualsToValidator extends Validator {

    constructor(arg) {
        super();
        this._arg = arg;
        this.errorMessage = 'Must be not be equal to ';
    }

    get arg() {
        return this._arg;
    }

    isValid(value) {
        return !_.isEqual(this.arg, value);
    }
}

module.exports = NotEqualsToValidator;
