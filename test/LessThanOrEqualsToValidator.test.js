const Validator = require('../src/LessThanOrEqualsToValidator');

describe ('LessThanOrEqualsToValidator', () => {
    const createDate = () => new Date(1500000000000);

    context ('#isValid', () => {
        it('should convert Date to Number', () => {
            new Validator(createDate()).isValid(createDate()).should.be.true();
        });

        it ('should be true for when values are equal', () => {
            new Validator(0).isValid(0).should.be.true();
        });

        it ('should be false for 1 <= 0', () => {
            new Validator(0).isValid(1).should.be.false();
        });

        it ('should be true for 0 <= 1', () => {
            new Validator(1).isValid(0).should.be.true();
        });
    });

    context ('#greaterThanZero', () => {
        it ('should be true when value and argument are greater than zero and equal', () => {
            new Validator(0.1).greaterThanZero().isValid(0.1).should.be.true();
        });
    });

    context ('#noLessThanOne', () => {
        it ('should be true when value and argument are no less than one and equal', () => {
            new Validator(1).noLessThanOne().isValid(1).should.be.true();
        });
    });
});
