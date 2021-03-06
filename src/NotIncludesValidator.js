const {includes, isArray, isObject, isUndefined, join} = require('lodash');
const Validator = require('./Validator');

class NotIncludesValidator extends Validator {
    constructor (arg) {
        if (!isArray(arg) || !isObject(arg)) {
            throw new Error('Argument must be either an array or an object.');
        }

        super(arg);
        this.withErrorMessage(`Value must not be included within rejected values list: ${join(arg)}.`);
    }

    isValid (value) {
        if (isUndefined(value)) {
            throw new Error('Value must be defined.');
        }

        return !includes(this.arg, value);
    }
}

module.exports = NotIncludesValidator;
