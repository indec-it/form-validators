
class Validator {

    constructor(errorMessage, args) {
        this.errorMessage = errorMessage;
        this.args = args;
    }

    validate(obj) {
        if (!this.isValid(obj)) {
            throw new Error(this.errorMessage);
        }
    }

    isValid(obj) {
        throw new Error('Must be implemented in subclass');
    }

}

module.exports = Validator;
