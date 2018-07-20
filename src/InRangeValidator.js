const {isNil} = require('lodash');
const Validator = require('./Validator.js');
const {checkArgumentType, convertDateToNumber} = require('../src/util/util');

class InRangeValidator extends Validator {
    constructor (minValue, maxValue) {
        if (isNil(minValue) || isNil(maxValue)) {
            throw new Error('Both lower and upper bounds must be specified.');
        }

        checkArgumentType(minValue);
        checkArgumentType(maxValue);

        if (minValue > maxValue) {
            throw new Error('Lower bound must be less or equal than upper bound.');
        }

        super(minValue);
        this._arg2 = convertDateToNumber(maxValue);

        this.withErrorMessage(`Number must be between ${minValue} and ${maxValue} or be equal to lower or upper bounds.`);
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

    isValid (arg) {
        let passesLowerCondition;
        let passesUpperCondition;

        const value = convertDateToNumber(arg);

        if (this.excludeLowerBoundary) {
            passesLowerCondition = value > this.arg;
        } else {
            passesLowerCondition = value >= this.arg;
        }

        if (this.excludeUpperBoundary) {
            passesUpperCondition = value < this.arg2;
        } else {
            passesUpperCondition = value <= this.arg2;
        }

        return passesLowerCondition && passesUpperCondition;
    }
}

module.exports = InRangeValidator;
