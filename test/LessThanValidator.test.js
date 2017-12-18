
const Validator = require('../src/LessThanValidator');

describe('LessThanValidator', () => {

    context('#isValid', () => {

        it('should be true for 0 < 1', () => {
            new Validator(1).isValid(0).should.be.true();
        });

        it('should be false when values are equal', () => {
            new Validator(0).isValid(0).should.be.false();
        });

        it('should be false for 1 < 0', () => {
            new Validator(0).isValid(1).should.be.false();
        });

    });

});
