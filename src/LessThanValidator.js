const _ = require('lodash');
const Validator = require('./Validator');
const {GREATER_THAN_ZERO, NO_LESS_THAN_ONE} = require('./constants').lowerBoundaryType;

class LessThanValidator extends Validator {
    constructor(arg) {
        if (!_.isNumber(arg)) {
            throw new Error('Argument must be a number.');
        }

        super(arg);
        this.withErrorMessage('Must be less than ');
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

    isValid(value) {
        let satisfiesCondition;

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
