
const Validator = require('./Validator');


class AlwaysTrueValidator extends Validator {

    isValid(obj) {
        return true;
    }

}

module.exports = AlwaysTrueValidator;
