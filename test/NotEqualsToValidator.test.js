
const should = require('should');
const NotEqualsToValidator = require('../src/NotEqualsToValidator');

describe('NotEqualsToValidator', () => {

    context('#isValid', () => {

        it('empty should be false', () => {
            should(new NotEqualsToValidator().isValid()).be.false();
        });

        it('equals number should be false', () => {
            should(new NotEqualsToValidator(1).isValid(1)).be.false();
        });

        it('diferents numbers should be true', () => {
            should(new NotEqualsToValidator(1).isValid(2)).be.true();
        });

        it('equals strings should be false', () => {
            should(new NotEqualsToValidator('').isValid('')).be.false();
        });

        it('equals arrays should be false', () => {
            let arr = [{a: 'a'}, {b: 'b'}];
            should(new NotEqualsToValidator(arr).isValid(arr)).be.false();
        });

        it('equal objects should be false', () => {
            let obj = {a: 'a', b: 'b'};
            should(new NotEqualsToValidator(obj).isValid(obj)).be.false();
        });

    });

});
