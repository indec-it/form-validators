const Validator = require('../src/InRangeValidator');

describe ('InRangeValidator', () => {
    const range = [0, 4];
    const createDate = value => new Date(value);

    context ('#constructor', () => {
        it ('should throw an Error if either argument is not defined', () => {
            (() => new Validator()).should.throw('Both lower and upper bounds must be specified.');
            (() => new Validator(0)).should.throw('Both lower and upper bounds must be specified.');
        });

        it ('should throw an Error if either argument is not a number', () => {
            (() => new Validator('a', 4)).should.throw('Argument must be a number or Date instance.');
            (() => new Validator(0, {})).should.throw('Argument must be a number or Date instance.');
            (() => new Validator(new Date(), {})).should.throw('Argument must be a number or Date instance.');
            (() => new Validator(5, false)).should.throw('Argument must be a number or Date instance.');
        });

        it ('should throw an Error if first argument is greater than the second argument', () => {
            (() => new Validator(4, 0)).should.throw('Lower bound must be less or equal than upper bound.');
        });

        it ('should convert second argument from Date to Number', () => {
            new Validator(
                1,
                createDate(1600000000000)
            ).should.have.properties({
                _arg2: 1600000000000
            });
        });
    });

    context ('#isValid', () => {
        it ('should be true for being greater than lower bound but less than upper bound', () => {
            new Validator(...range).isValid(2).should.be.true();
        });

        it ('should be true if value is equal to lower bound', () => {
            new Validator(...range).isValid(0).should.be.true();
        });

        it ('should be true if value is equal to upper bound', () => {
            new Validator(...range).isValid(4).should.be.true();
        });

        it ('should be false if value is less than lower bound', () => {
            new Validator(...range).isValid(-1).should.be.false();
        });

        it ('should be false if value is greater than upper bound', () => {
            new Validator(...range).isValid(5).should.be.false();
        });

        it('should convert Date to Number', () => {
            new Validator(
                createDate(1500000000000),
                createDate(1600000000000)
            ).isValid(
                createDate(1550000000000)
            ).should.be.true();
        });
    });

    context ('#notIncludingLowerBoundary', () => {
        it ('should be false if value is equal to lower boundary', () => {
            new Validator(...range).notIncludingLowerBoundary().isValid(0).should.be.false();
        });

        it ('should be true if value is greater than lower boundary', () => {
            new Validator(...range).notIncludingLowerBoundary().isValid(0.1).should.be.true();
            new Validator(...range).notIncludingLowerBoundary().isValid(1).should.be.true();
        });
    });

    context ('#notIncludingUpperBoundary', () => {
        it ('should be false if value is equal to upper boundary', () => {
            new Validator(...range).notIncludingUpperBoundary().isValid(4).should.be.false();
        });

        it ('should be true if value is lower than upper boundary', () => {
            new Validator(...range).notIncludingLowerBoundary().isValid(3).should.be.true();
            new Validator(...range).notIncludingLowerBoundary().isValid(3.9).should.be.true();
        });
    });

    context ('#notIncludingBoundaries', () => {
        it ('should be false if value is equal to lower boundary', () => {
            new Validator(...range).notIncludingBoundaries().isValid(4).should.be.false();
        });

        it ('should be false if value is equal to upper boundary', () => {
            new Validator(...range).notIncludingBoundaries().isValid(0).should.be.false();
        });

        it ('should be true if value is between boundaries', () => {
            new Validator(...range).notIncludingBoundaries().isValid(0.1).should.be.true();
            new Validator(...range).notIncludingBoundaries().isValid(1).should.be.true();
            new Validator(...range).notIncludingBoundaries().isValid(3).should.be.true();
            new Validator(...range).notIncludingBoundaries().isValid(3.9).should.be.true();
        });
    });
});
