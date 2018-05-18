const {constant} = require('lodash');
const Validator = require('./Validator');


class AlwaysTrueValidator extends Validator {
    constructor() {
        super();
        this.withErrorMessage('This validates always to true.');
        this.isValid = constant(true);
    }
}

module.exports = AlwaysTrueValidator;
