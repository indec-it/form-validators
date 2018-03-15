
const Validator = require('./Validator');


class AlwaysTrueValidator extends Validator {
    constructor() {
        super();
        this.withErrorMessage('This validates always to true.');
    }

    isValid(obj) {
        return true;
    }

}

module.exports = AlwaysTrueValidator;
