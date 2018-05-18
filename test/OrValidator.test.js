const should = require('should');
const LessThanValidator = require('../src/LessThanValidator');
const GreaterThanValidator = require('../src/GreaterThanValidator');
const EqualsToValidator = require('../src/EqualsToValidator');
const AndValidator = require('../src/AndValidator');
const OrValidator = require('../src/OrValidator');

describe('OrValidator', () => {
    context ('#constructor', () => {
        it ('should throw an Error if there is less than two arguments', () => {
            (() => new OrValidator()).should.throw();
            (() => new OrValidator(new GreaterThanValidator(23))).should.throw();
        });
    });

    context('#isValid', () => {
        it('should be true for at least one fulfilled condition', () => {
            should(new OrValidator(new GreaterThanValidator(42), new EqualsToValidator(42)).isValid(42)).be.true();
        });

        it('should be true for a nested complex condition', () => {
            const validator = new OrValidator(
                new AndValidator(new GreaterThanValidator(50), new EqualsToValidator(50)),
                new OrValidator(new EqualsToValidator(42), new EqualsToValidator(1)) // <== this one is true!
            );

            should(validator.isValid(42)).be.true();
        });

        it('should be false when no fulfilled conditions', () => {
            should(new OrValidator(new LessThanValidator(50), new EqualsToValidator(50)).isValid(55)).be.false();
        });
    });
});
