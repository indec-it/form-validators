
class Validator {

    constructor(arg) {
        this._arg = arg;
        this.errorMessage = 'Validation failed';
    }

    get arg() {
        return this._arg;
    }

    get errorMessage() {
        return this._errorMessage;
    }

    set errorMessage(errorMessage) {
        this._errorMessage = errorMessage;
        return this;
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
