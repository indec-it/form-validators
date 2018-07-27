const LessThanValidator = require('./LessThanValidator');
const {GREATER_THAN_ZERO, NO_LESS_THAN_ONE} = require('./constants').lowerBoundaryType;
const {convertDateToNumber} = require('../src/util/util');

class LessThanOrEqualsToValidator extends LessThanValidator {
    constructor(arg) {        
        super(arg);
        this.withErrorMessage(`Must be less than or equals to ${arg}.`);
    }

    isValid(value) {
        let satisfiesCondition;
        const valueToEvaluate = convertDateToNumber(value);

        switch (this.lowerBoundaryType) {
            case GREATER_THAN_ZERO:
                satisfiesCondition = valueToEvaluate > 0 && valueToEvaluate <= this.arg; break;
            case NO_LESS_THAN_ONE:
                satisfiesCondition = valueToEvaluate >= 1 && valueToEvaluate <= this.arg; break;
            default:
                satisfiesCondition = valueToEvaluate <= this.arg;
        }

        return satisfiesCondition;
    }
}

module.exports = LessThanOrEqualsToValidator;


