
const should = require('should');
const EmptyValidator = require('../src/EmptyValidator');


describe('EmptyValidator', () => {

    context('#isValid', () => {

        it('empty should be true', () => {
            should(new EmptyValidator().isValid()).be.true();
        });

        it('undefined should be true', () => {
            should(new EmptyValidator(undefined).isValid()).be.true();
        });

        it('null should be true', () => {
            should(new EmptyValidator().isValid(null)).be.true();
        });

        it('0 should be true', () => {
            should(new EmptyValidator().isValid(0)).be.true();
        });

        it('empty string should be true', () => {
            should(new EmptyValidator().isValid('')).be.true();
        });

        it('not empty string should be false', () => {
            should(new EmptyValidator().isValid('4d')).be.false();
        });

        it('number should be false', () => {
            should(new EmptyValidator().isValid('4d')).be.false();
        });

        it('object should be false', () => {
            should(new EmptyValidator().isValid({})).be.false();
        });

        it('array should be false', () => {
            should(new EmptyValidator().isValid([])).be.false();
        });

    });

});
