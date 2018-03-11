
const _ = require('lodash');
const Validator = require('./Validator');

class AndValidator extends Validator {

    constructor() {
        super(_.values(arguments));
        this.withErrorMessage('Must fulfill all validators ');
    }

    isValid(value) {
        return _.every(this.arg, (v) => v.isValid(value));
    }
}

module.exports = AndValidator;
