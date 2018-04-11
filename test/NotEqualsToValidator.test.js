
const Validator = require('../src/NotEqualsToValidator');

describe('NotEqualsToValidator', () => {
    context('#isValid', () => {
        it('should be false when not defined', () => {
            new Validator().isValid().should.be.false();
            new Validator(undefined).isValid(undefined).should.be.false();
            new Validator(undefined).isValid().should.be.false();
        });

        it('should be false when null', () => {
            new Validator(null).isValid(null).should.be.false();
        });

        it('should be false for equal numbers', () => {
            new Validator(1).isValid(1).should.be.false();
        });

        it('should be true for different numbers', () => {
            new Validator(1).isValid(2).should.be.true();
        });

        it('should be false for equal strings', () => {
            new Validator('').isValid('').should.be.false();
        });

        it('should be true when undefined - empty string', () => {
            new Validator().isValid('4d').should.be.true();
        });

        it('should be true when arrays have different objects', () => {
            new Validator([{a: 'b'}, {b: 'b'}]).isValid([{d: 'a'}, {b: 'b'}]).should.be.true();
        });

        it('should be false for equal arrays', () => {
            new Validator([{a: 'a'}, {b: 'b'}]).isValid([{a: 'a'}, {b: 'b'}]).should.be.false();
        });

        it('should be false for equal objects', () => {
            new Validator({a: 'a', b: 'b'}).isValid({a: 'a', b: 'b'}).should.be.false();
        });
    });
});
