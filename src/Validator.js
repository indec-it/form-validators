
class Validator {

    constructor(arg) {
        this._arg = arg;
        this.withErrorMessage('Validation failed');
    }

    get arg() {
        return this._arg;
    }

    errorMessage() {
        return this._errorMessage;
    }

    withErrorMessage(errorMessage) {
        this._errorMessage = errorMessage;
        return this;
    }

    forThis() {
        return this;
    }

    validate(obj) {
        if (!this.isValid(obj)) {
            throw new Error(this.errorMessage());
        }
    }

    isValid(obj) {
        throw new Error('Must be implemented in subclass');
    }
}

module.exports = Validator;
