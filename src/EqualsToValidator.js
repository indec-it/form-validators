
const _ = require('lodash');
const Validator = require('./Validator');

class EqualsToValidator extends Validator {

    constructor(arg) {
        super();
        this._arg = arg;
        this.errorMessage = 'Must be equal to ';
    }

    get arg() {
        return this._arg;
    }

    isValid(value) {
        return _.isEqual(this.arg, value);
    }
}

module.exports = EqualsToValidator;
