const _ = require('lodash');
const Validator = require('./Validator');

class IncludesValidator extends Validator {
    constructor (arg) {
        if (!_.isArray(arg) || !_.isObject(arg)) {
            throw new Error('Argument must be either an array or an object.');
        }

        super(arg);
        this.withErrorMessage('Value must be included within accepted values list.');
    }

    isValid (value) {
        if (_.isUndefined(value)) {
            throw new Error('Value must be defined.');
        }

        return _.includes(this.arg, value);
    }
}

module.exports = IncludesValidator;
