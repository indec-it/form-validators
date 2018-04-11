
const Validator = require('../src/LessThanValidator');

describe('LessThanValidator', () => {
    context ('#constructor', () => {
        it ('should throw an Error if the argument is not a number', () => {
            (() => new Validator('a string')).should.throw();
            (() => new Validator(null)).should.throw();
            (() => new Validator({number: 1})).should.throw();
            (() => new Validator([1])).should.throw();
            (() => new Validator(true)).should.throw();
            (() => new Validator(false)).should.throw();
            (() => new Validator(undefined)).should.throw();
            (() => new Validator()).should.throw();
        });
    });

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

    context ('#greaterThanZero', () => {
        it ('should throw an Error if argument is less than or equals to zero', () => {
            (() => new Validator(-1).greaterThanZero()).should.throw();
            (() => new Validator(0).greaterThanZero()).should.throw();
            (() => new Validator(0).greaterThanZero().isValid(-1)).should.throw();
        });

        it ('should be false for 0 < 1', () => {
            new Validator(1).greaterThanZero().isValid(0).should.be.false();
        });

        it ('should be true when value is greater than zero', () => {
            new Validator(2).greaterThanZero().isValid(1).should.be.true();
            new Validator(2).greaterThanZero().isValid(0.1).should.be.true();
        });

        it ('should be false when value and argument are greater than zero and equal', () => {
            new Validator(0.1).greaterThanZero().isValid(0.1).should.be.false();
        });
    });

    context ('#noLessThanOne', () => {
        it ('should throw an Error if argument is less than one', () => {
            (() => new Validator(0.9).noLessThanOne()).should.throw();
            (() => new Validator(0).noLessThanOne()).should.throw();
            (() => new Validator(0).noLessThanOne().isValid(-1)).should.throw();
        });

        it ('should be false when value is lower than one', () => {
            new Validator(1).noLessThanOne().isValid(0).should.be.false();
            new Validator(1).noLessThanOne().isValid(0.9).should.be.false();
        });

        it ('should be true for 1 < 2', () => {
            new Validator(2).noLessThanOne().isValid(1).should.be.true();
        });

        it ('should be false when value and argument are no less than one and equal', () => {
            new Validator(1).noLessThanOne().isValid(1).should.be.false();
        });
    });

    context ('#checkOptionOverwrite', () => {
        it ('should throw an Error when trying to overwrite an option', () => {
            (() => new Validator(100).noLessThanOne().greaterThanZero()).should.throw();
            (() => new Validator(1).greaterThanZero().noLessThanOne()).should.throw();
        });
    });
});
