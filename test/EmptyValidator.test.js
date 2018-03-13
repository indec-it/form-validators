
const Validator = require('../src/EmptyValidator');


describe('EmptyValidator', () => {
    context ('#constructor', () => {
        it ('should throw an Error if there are arguments provided', () => {
            (() => new Validator(1)).should.throw();
        });
    });

    context('#isValid', () => {
        it('should be true when there is no value defined', () => {
            new Validator().isValid().should.be.true();
            new Validator().isValid(undefined).should.be.true();
            new Validator().isValid(null).should.be.true();
        });

        it('should be true when null', () => {
            new Validator().isValid(null).should.be.true();
        });

        it('should be true when 0', () => {
            new Validator().isValid(0).should.be.true();
        });

        it('should be true when empty string', () => {
            new Validator().isValid('').should.be.true();
        });

        it('should be false when not empty string', () => {
            new Validator().isValid('4d').should.be.false();
        });

        it('should be false when number', () => {
            new Validator().isValid(4).should.be.false();
        });

        it('should be true when object has no values', () => {
            new Validator().isValid({}).should.be.true();
            new Validator().isValid({value: 1}).should.be.false();
        });

        it('should be false when array', () => {
            new Validator().isValid([]).should.be.true();
            new Validator().isValid([1]).should.be.false();
        });

    });

});
