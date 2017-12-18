const Validator = require('./Validator');

class LessThanValidator extends Validator {

    constructor(max, errorMessage = 'El valor debe ser menor a ') {
        super(errorMessage);
        this.max = max;
    }

    isValid(value) {
        return value < this.max;
    }
}

module.exports = LessThanValidator;


