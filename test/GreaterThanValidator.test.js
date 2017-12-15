const should = require('should');
const GreaterThanValidator = require('../src/GreaterThanValidator');

describe('GreaterThanValidator', () => {

    context('#isValid', () => {

        it('0 > 1 should be false', () => {
            should(new GreaterThanValidator(1).isValid(0)).be.false();
        });

        it('0 > 0 should be false', () => {
            should(new GreaterThanValidator(0).isValid(0)).be.false();
        });

        it('1 > 0 should be true', () => {
            should(new GreaterThanValidator(0).isValid(1)).be.true();
        });

    });

});
