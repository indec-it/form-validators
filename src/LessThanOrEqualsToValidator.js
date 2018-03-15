const _ = require('lodash');
const LessThanValidator = require('./LessThanValidator');
const {GREATER_THAN_ZERO, NO_LESS_THAN_ONE} = require('./constants').lowerBoundaryType;

class LessThanOrEqualsToValidator extends LessThanValidator {
    constructor(arg) {
        super(arg);
        this.withErrorMessage('Must be less than or equals to ');
    }

    isValid(value) {
        let satisfiesCondition;

        switch (this.lowerBoundaryType) {
            case GREATER_THAN_ZERO:
                satisfiesCondition = value > 0 && value <= this.arg; break;
            case NO_LESS_THAN_ONE:
                satisfiesCondition = value >= 1 && value <= this.arg; break;
            default:
                satisfiesCondition = value <= this.arg;
        }

        return satisfiesCondition;
    }
}

module.exports = LessThanOrEqualsToValidator;


