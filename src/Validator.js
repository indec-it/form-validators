const {isDate} = require('lodash');
const {ERROR, WARNING} = require('./constants').validationStates;

class Validator {

    constructor(arg) {
        if (isDate(arg)) {
            this._arg = Date.parse(arg);
        } else {
            this._arg = arg;
        }
        
        this._invalidState = ERROR;
        this.withErrorMessage('Validation failed');
    }

    get arg() {
        return this._arg;
    }

    get invalidState () {
        return this._invalidState;
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

    against() {
        return this;
    }

    onInvalidReturn(invalidState) {
        this._invalidState = invalidState;
        return this;
    }

    /**
     * Returns true when the validation is required and has not passed the test.
     * @param {object} obj An object to be evaluated.
     * @returns {boolean} Returns true when the validation has a blocker state.
     */
    hasBlockerState(obj) {
        return !this.isValid(obj) && this.invalidState === ERROR;
    }

    getValidationResult() {
        return {
            hasFailed: this.invalidState === ERROR,
            hasWarning: this.invalidState === WARNING,
            message: this.errorMessage()
        };
    }

    validate(obj) {
        if (!this.isValid(obj)) {
            throw new Error(this.errorMessage());
        }
    }

    isValid() {
        throw new Error('Must be implemented in subclass');
    }
}

module.exports = Validator;
