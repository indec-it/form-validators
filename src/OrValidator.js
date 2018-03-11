
const _ = require('lodash');
const Validator = require('./Validator');

class OrValidator extends Validator {

    constructor() {
        super(_.values(arguments));
        this.withErrorMessage('Must fulfill at least one validator ');
    }

    isValid(value) {
        return _.some(this.arg, (v) => v.isValid(value));
    }
}

module.exports = OrValidator;
