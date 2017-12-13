
const should = require('should');
const EqualsToValidator = require('../src/EqualsToValidator');

describe('EqualsToValidator', () => {

    context('#isValid', () => {

        it('empty should be true', () => {
            should(new EqualsToValidator().isValid()).be.true();
        });

        it('undefined should be true', () => {
            should(new EqualsToValidator(undefined).isValid(undefined)).be.true();
        });

        it('null should be true', () => {
            should(new EqualsToValidator(null).isValid(null)).be.true();
        });

        it('number should be true', () => {
            should(new EqualsToValidator(10).isValid(10)).be.true();
        });

        it('empty string should be true', () => {
            should(new EqualsToValidator('').isValid('')).be.true();
        });

        it('undefined - empty string should be false', () => {
            should(new EqualsToValidator().isValid('4d')).be.false();
        });

        it('number should be false', () => {
            should(new EqualsToValidator(54).isValid(3)).be.false();
        });

        it('object should be false', () => {
            should(new EqualsToValidator().isValid({})).be.false();
        });

        it('object should be true', () => {
            should(new EqualsToValidator({}).isValid({})).be.true();
        });

        it('array of objects should be true', () => {
            should(new EqualsToValidator([{a: 'a'}, {b: 'b'}]).isValid([{a: 'a'}, {b: 'b'}])).be.true();
        });

        it('array of objects should be true', () => {
            should(new EqualsToValidator([{a: 'b'}, {b: 'b'}]).isValid([{d: 'a'}, {b: 'b'}])).be.false();
        });

    });

});
