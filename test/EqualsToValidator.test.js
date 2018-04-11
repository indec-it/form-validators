
const Validator = require('../src/EqualsToValidator');

describe('EqualsToValidator', () => {
    context('#isValid', () => {
        it('should be true when not defined', () => {
            new Validator().isValid().should.be.true();
            new Validator(undefined).isValid(undefined).should.be.true();
            new Validator(undefined).isValid().should.be.true();
        });

        it('should be true when null', () => {
            new Validator(null).isValid(null).should.be.true();
        });

        it('should be true for equal numbers', () => {
            new Validator(10).isValid(10).should.be.true();
        });

        it('should be true when empty string', () => {
            new Validator('').isValid('').should.be.true();
        });

        it('should be false when undefined - empty string', () => {
            new Validator().isValid('4d').should.be.false();
        });

        it('should be false when numbers are not the same', () => {
            new Validator(54).isValid(3).should.be.false();
        });

        it('should be false when object', () => {
            new Validator().isValid({}).should.be.false();
        });

        it('should be true when objects are empty', () => {
            new Validator({}).isValid({}).should.be.true();
        });

        it('should be true when array of objects', () => {
            new Validator([{a: 'a'}, {b: 'b'}]).isValid([{a: 'a'}, {b: 'b'}]).should.be.true();
        });

        it('should be false when arrays have different objects', () => {
            new Validator([{a: 'b'}, {b: 'b'}]).isValid([{d: 'a'}, {b: 'b'}]).should.be.false();
        });
    });
});
