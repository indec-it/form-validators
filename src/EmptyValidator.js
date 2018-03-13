const _ = require('lodash');
const Validator = require('./Validator');

class EmptyValidator extends Validator {

    constructor() {
        super();
        this.withErrorMessage('Value must be empty.');
    }

    isValid(value){
        return value === undefined || value === null || value === '' || value === 0;// || (_.isArray(value) && value.length === 0) || (_.isObject(value) && _.values(value).length === 0);
    }
}

module.exports = EmptyValidator;
