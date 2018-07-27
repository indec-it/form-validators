const Validator = require('./Validator');
const {GREATER_THAN_ZERO, NO_LESS_THAN_ONE} = require('./constants').lowerBoundaryType;
const {checkArgumentType, convertDateToNumber} = require('../src/util/util');

class LessThanValidator extends Validator {
    constructor(arg) {
        checkArgumentType(arg);

        super(arg);
        this.withErrorMessage(`Must be less than ${arg}.`);
    }

    greaterThanZero () {
        this.checkOptionOverwrite();
        if (this.arg <= 0) {
            throw new Error('Argument must be greater than zero.');
        }

        this.lowerBoundaryType = GREATER_THAN_ZERO;
        return this;
    }

    noLessThanOne() {
        this.checkOptionOverwrite();
        if (this.arg < 1) {
            throw new Error('Argument must be greater than or equals to one.');
        }

        this.lowerBoundaryType = NO_LESS_THAN_ONE;
        return this;
    }

    checkOptionOverwrite () {
        if (this.lowerBoundaryType) {
            throw new Error('Avoid option overwrite.');
        }
    }

    isValid(arg) {
        let satisfiesCondition;
        const value = convertDateToNumber(arg);

        switch (this.lowerBoundaryType) {
            case GREATER_THAN_ZERO:
                satisfiesCondition = value > 0 && value < this.arg; break;
            case NO_LESS_THAN_ONE:
                satisfiesCondition = value >= 1 && value < this.arg; break;
            default:
                satisfiesCondition = value < this.arg;
        }

        return satisfiesCondition;
    }
}

module.exports = LessThanValidator;
