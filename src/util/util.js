const {isDate, isNumber} = require('lodash');

module.exports = {
    convertDateToNumber: value => isDate(value) ? Date.parse(value) : value,
    checkArgumentType: arg => {
        if (!isNumber(arg) && !isDate(arg)) {
            throw new Error('Argument must be a number or Date instance.');
        }
    }
};
