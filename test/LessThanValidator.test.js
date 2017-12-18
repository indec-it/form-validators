const should = require('should');
const LessThanValidator = require('../src/LessThanValidator');

describe('LessThanValidator', () => {

    context('#isValid', () => {

        it('0 < 1 should be true', () => {
            should(new LessThanValidator(1).isValid(0)).be.true();
        });

        it('0 < 0 should be false', () => {
            should(new LessThanValidator(0).isValid(0)).be.false();
        });

        it('1 < 0 should be false', () => {
            should(new LessThanValidator(0).isValid(1)).be.false();
        });

    });

});
