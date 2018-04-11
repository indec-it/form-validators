const Validator = require('../src/GreaterThanOrEqualsToValidator');

describe ('GreaterThanOrEqualsToValidator', () => {
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

    context ('#isValid', () => {
        it ('should be true for when values are equal', () => {
            new Validator(0).isValid(0).should.be.true();
        });

        it ('should be true for 1 >= 0', () => {
            new Validator(0).isValid(1).should.be.true();
        });

        it ('should be false for 0 >= 1', () => {
            new Validator(1).isValid(0).should.be.false();
        });
    });
});
