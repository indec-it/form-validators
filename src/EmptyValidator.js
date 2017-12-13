const Validator = require('./Validator');

class EmptyValidator extends Validator {

    constructor() {
        super();
        this.errorMessage = 'Must not be empty';
    }

    isValid(value){
        return value === undefined || value === null || value === '' || value === 0;
    }
}

module.exports = EmptyValidator;
