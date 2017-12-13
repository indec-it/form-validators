const Validator = require('./Validator');
const lodash = require('lodash');

class EqualsToValidator extends Validator {

    constructor(value, errorMessage = 'El valor debe ser igual a ') {
        super(errorMessage);
        this.value = value;
    }

    isValid(value) {
        return lodash.isEqual(value, this.value);
    }
}

module.exports = EqualsToValidator;
