const Validator = require('../src/NotOnlyNumbersValidator');

describe ('NotOnlyNumbersValidator', () => {
    context ('#isValid', () => {
        it ('should be false if value is a number', () => {
            new Validator().isValid(123).should.be.false();
            new Validator().isValid(123.45).should.be.false();
            new Validator().isValid('456').should.be.false();
            new Validator().isValid('456.78').should.be.false();
        });

        it ('should be true if value is a string', () => {
            new Validator().isValid('').should.be.true();
            new Validator().isValid('a string').should.be.true();
            new Validator().isValid('a string and 123').should.be.true();
            new Validator().isValid('123 and string').should.be.true();
        });

        it ('should be false if value is not a string', () => {
            new Validator().isValid({}).should.be.false();
            new Validator().isValid([]).should.be.false();
            new Validator().isValid(null).should.be.false();
            new Validator().isValid().should.be.false();
            new Validator().isValid(undefined).should.be.false();
            new Validator().isValid(true).should.be.false();
        });
    });
});
