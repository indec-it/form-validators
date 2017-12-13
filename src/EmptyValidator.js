const Validator = require('./Validator');

class EmptyValidator extends Validator {
    constructor(errorMessage = 'Este campo debe estar vacio') {
        super(errorMessage);
    }

    isValid(value){
        return value === undefined || value === null || value === '' || value === 0;
    }
}

module.exports = EmptyValidator;
