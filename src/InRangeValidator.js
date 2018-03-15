const _ = require('lodash');
const Validator = require('./Validator.js');

class InRangeValidator extends Validator {
    constructor (arg, arg2) {
        if (_.isNil(arg) || _.isNil(arg2)) {
            throw new Error('Both lower and upper bounds must be specified.');
        }

        if (!_.isNumber(arg) || !_.isNumber(arg2)) {
            throw new Error('Both arguments must be numbers.');
        }

        if (arg > arg2) {
            throw new Error('Lower bound must be less or equal than upper bound.');
        }

        super(arg);
        this._arg2 = arg2;
        this.withErrorMessage(`Number must be between ${arg} and ${arg2} or be equal to lower or upper bounds.`);
    }

    get arg2 () {
        return this._arg2;
    }

    notIncludingLowerBoundary () {
        this.excludeLowerBoundary = true;
        return this;
    }

    notIncludingUpperBoundary () {
        this.excludeUpperBoundary = true;
        return this;
    }

    notIncludingBoundaries () {
        this.excludeLowerBoundary = true;
        this.excludeUpperBoundary = true;
        return this;
    }

    isValid (value) {
        let passesLowerCondition;
        let passesUpperCondition;

        if (this.excludeLowerBoundary) {
            passesLowerCondition = value > this.arg;
        } else {
            passesLowerCondition = value >= this.arg
        }

        if (this.excludeUpperBoundary) {
            passesUpperCondition = value < this.arg2;
        } else {
            passesUpperCondition = value <= this.arg2
        }

        return passesLowerCondition && passesUpperCondition;
    }
}

module.exports = InRangeValidator;
