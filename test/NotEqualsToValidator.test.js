
const Validator = require('../src/NotEqualsToValidator');

describe('NotEqualsToValidator', () => {

    context('#isValid', () => {

        it('should be false when empty', () => {
            new Validator().isValid().should.be.false();
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

        it('should be false for equal arrays', () => {
            let arr = [{a: 'a'}, {b: 'b'}];
            new Validator(arr).isValid(arr).should.be.false();
        });

        it('should be false for equal objects', () => {
            const obj = {a: 'a', b: 'b'};
            new Validator(obj).isValid(obj).should.be.false();
        });

    });

});
