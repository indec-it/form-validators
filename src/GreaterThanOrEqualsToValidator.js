const Validator = require('./Validator');
const {checkArgumentType, convertDateToNumber} = require('../src/util/util');

class GreaterThanOrEqualsToValidator extends Validator {
    constructor(arg) {
        checkArgumentType(arg);

        super(arg);
        this.withErrorMessage(`Must be greater than or equals to ${arg}.`);
    }

    isValid(value) {
        return convertDateToNumber(value) >= this.arg;
    }
}

module.exports = GreaterThanOrEqualsToValidator;
