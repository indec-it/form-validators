const _ = require('lodash');
const Validator = require('./Validator');

class AndValidator extends Validator {

    constructor() {
        if (_.size(arguments) < 2) {
            throw new Error('Validator must receive at least two validations.');
        }

        super(_.values(arguments));
        this.withErrorMessage('Must fulfill all validations.');
    }

    isValid(value) {
        return _.every(this.arg, validation => validation.isValid(value));
    }
}

module.exports = AndValidator;
