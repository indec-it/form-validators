
const Validator = require('../src/EmptyValidator');


describe('EmptyValidator', () => {

    context('#isValid', () => {

        it('should be true when empty', () => {
            new Validator().isValid().should.be.true();
        });

        it('should be true when undefined', () => {
            new Validator(undefined).isValid().should.be.true();
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

        it('should be false when object', () => {
            new Validator().isValid({}).should.be.false();
        });

        it('should be false when array', () => {
            new Validator().isValid([]).should.be.false();
        });

    });

});
