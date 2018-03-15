const _ = require('lodash');
const Validator = require('./Validator');

class OrValidator extends Validator {

    constructor() {
        if (_.size(arguments) < 2) {
            throw new Error('Validator must receive at least two validations.');
        }

        super(_.values(arguments));
        this.withErrorMessage('Must fulfill at least one validator.');
    }

    isValid(value) {
        return _.some(this.arg, validation => validation.isValid(value));
    }
}

module.exports = OrValidator;
