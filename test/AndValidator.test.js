const should = require('should');
const LessThanValidator = require('../src/LessThanValidator');
const GreaterThanValidator = require('../src/GreaterThanValidator');
const NotEqualsToValidator = require('../src/NotEqualsToValidator');
const AndValidator = require('../src/AndValidator');


describe('AndValidator', () => {
    context ('#constructor', () => {
        it ('should throw an Error if there is less than two arguments', () => {
            (() => new AndValidator()).should.throw();
            (() => new AndValidator(new GreaterThanValidator(23))).should.throw();
        });
    });

    context('#isValid', () => {
        it('should be true for fulfilled conditions', () => {
            should(new AndValidator(new GreaterThanValidator(42), new NotEqualsToValidator(42)).isValid(43)).be.true();
        });

        it('should be false for not fulfilled conditions', () => {
            should(new AndValidator(new LessThanValidator(50), new GreaterThanValidator(42), new NotEqualsToValidator(50)).isValid(55)).be.false();
        });
    });
});
