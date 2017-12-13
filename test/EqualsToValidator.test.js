
const Validator = require('../src/EqualsToValidator');

describe('EqualsToValidator', () => {

    context('#isValid', () => {

        it('should be true when empty', () => {
            new Validator().isValid().should.be.true();
        });

        it('should be true when undefined', () => {
            new Validator(undefined).isValid(undefined).should.be.true();
        });

        it('should be true when null', () => {
            new Validator(null).isValid(null).should.be.true();
        });

        it('should be true when number', () => {
            new Validator(10).isValid(10).should.be.true();
        });

        it('should be true when empty string', () => {
            new Validator('').isValid('').should.be.true();
        });

        it('should be false when undefined - empty string', () => {
            new Validator().isValid('4d').should.be.false();
        });

        it('should be false when number', () => {
            new Validator(54).isValid(3).should.be.false();
        });

        it('should be false when object', () => {
            new Validator().isValid({}).should.be.false();
        });

        it('should be true when object', () => {
            new Validator({}).isValid({}).should.be.true();
        });

        it('should be true when array of objects', () => {
            new Validator([{a: 'a'}, {b: 'b'}]).isValid([{a: 'a'}, {b: 'b'}]).should.be.true();
        });

        it('should be true when array of objects', () => {
            new Validator([{a: 'b'}, {b: 'b'}]).isValid([{d: 'a'}, {b: 'b'}]).should.be.false();
        });

    });

});
