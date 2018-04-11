const {includes, isArray, isObject, size} = require('lodash');
const Validator = require('./Validator');

class EmptyValidator extends Validator {

    constructor() {
        if (size(arguments)) {
            throw new Error('There must be no arguments specified.');
        }

        super();
        this.withErrorMessage('Value must be empty.');
    }

    isValid(value){
        return includes([undefined, null, '', 0], value) || ((isArray(value) || isObject(value)) && !size(value));
    }
}

module.exports = EmptyValidator;
