
const Validator = require('../src/GreaterThanValidator');

describe('GreaterThanValidator', () => {

    context('#isValid', () => {

        it('should be false for 0 > 1', () => {
            new Validator(1).isValid(0).should.be.false();
        });

        it('should be false when values are equal', () => {
            new Validator(0).isValid(0).should.be.false();
        });

        it('should be true for 1 > 0', () => {
            new Validator(0).isValid(1).should.be.true();
        });

    });

});
