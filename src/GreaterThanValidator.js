const Validator = require('./Validator');

class GreaterThanValidator extends Validator {

    constructor(value, errorMessage = 'El valor debe ser igual a ') {
        super(errorMessage);
        this.value = value;
    }

    isValid(value) {
        return value > this.value;
    }
}

module.exports = GreaterThanValidator;


