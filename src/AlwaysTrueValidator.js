
const Validator = require('./Validator');


class AlwaysTrueValidator extends Validator {
    constructor(errorMessage) {
        super(errorMessage);
    }

    isValid(obj) {
        return true;
    }

}

module.exports = AlwaysTrueValidator;
