const Validator = require('../src/IncludesValidator');

describe ('IncludesValidator', () => {
    const values = [null, '', 1, true, false];

    context ('#constructor', () => {
        it ('should throw an Error if the argument is neither an array or object', () => {
            (() => new Validator('a string')).should.throw();
            (() => new Validator(1234)).should.throw();
            (() => new Validator(NaN)).should.throw();
            (() => new Validator(undefined)).should.throw();
            (() => new Validator(true)).should.throw();
            (() => new Validator(false)).should.throw();
            (() => new Validator(null)).should.throw();
            (() => new Validator()).should.throw();
        });
    });

    context ('#isValid', () => {
        it ('should throw an Error if value is empty', () => {
            (() => new Validator(values).isValid()).should.throw();
        });

        it ('should be true if value is within list', () => {
            new Validator(values).isValid(null).should.be.true();
            new Validator(values).isValid('').should.be.true();
            new Validator(values).isValid(1).should.be.true();
            new Validator(values).isValid(true).should.be.true();
            new Validator(values).isValid(false).should.be.true();
        });

        it ('should be false if value is not within list', () => {
            new Validator(values).isValid('a string').should.be.false();
        });
    });
});
