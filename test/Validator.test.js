
const should = require('should');
const sinon = require('sinon');
const Validator = require('../src/Validator');
const {ERROR, WARNING} = require('../src/constants').validationStates;

describe('Validator', () => {

    let validator;

    beforeEach(() => {
        validator = new Validator('An error message', null);
    });

    context('#constructor', () => {
        it('should convert Date to Number', () => {
            new Validator(new Date(1500000000000)).should.have.properties({_arg: 1500000000000});
        });
    });

    context('#validate', () => {

        it('should not throw Error if validation passes', () => {

            sinon.stub(validator, 'isValid').returns(true);

            should(() => {
                validator.validate();
            }).not.throwError();

            validator.isValid.restore();

        });

        it('should throw Error if validation fails', () => {

            sinon.stub(validator, 'isValid').returns(false);

            should(() => {
                validator.validate();
            }).throw('Validation failed');

            validator.isValid.restore();

        });

    });

    context('#isValid', () => {

        it('should throw Error as default implementation', () => {

            should(() => {
                validator.isValid();
            }).throw('Must be implemented in subclass');

        });

    });

    context('#forThis', () => {
        it('should return itself', () => {
            should(validator.forThis()).be.an.Object();
            should(validator.forThis()).be.equals(validator);
        });

        it('should not attach an entity', () => {
            should(validator.forThis({name: 'John', surname: 'Doe'})).not.have.property('entity');
        });
    });

    context('#onInvalidReturn', () => {
        it('should add a state for invalid results', () => {
            validator.onInvalidReturn(WARNING).should.have.property('invalidState').which.is.equal(WARNING);

        });

        it('should return itself', () => {
            should(validator.onInvalidReturn()).be.an.Object();
        });

        it('should return undefined invalidState if none was provided', () => {
            validator.onInvalidReturn().should.have.property('invalidState').which.is.undefined();
        });
    });

    context('#hasBlockerState', () => {
        it('should be true if is not valid and invalid state was set to WARNING', () => {
            sinon.stub(validator, 'isValid').returns(false);

            validator.onInvalidReturn(ERROR);
            validator.hasBlockerState('a non valid value').should.be.true();

            validator.isValid.restore();
        });

        it('should be false if is valid for whatever invalid state was set', () => {
            sinon.stub(validator, 'isValid').returns(true);

            validator.onInvalidReturn(ERROR);
            validator.hasBlockerState('a valid value').should.be.false();

            validator.isValid.restore();
        });

        it('should be false if it is not valid and invalid state was set to ERROR', () => {
            sinon.stub(validator, 'isValid').returns(false);

            validator.onInvalidReturn(WARNING);
            validator.hasBlockerState('a non valid value').should.be.false();

            validator.isValid.restore();
        });
    });

    context('#against', () => {
        it('should return itself', () => {
            should(validator.against()).be.an.Object();
            should(validator.against()).be.equals(validator);
        });

        it('should not attach an entity', () => {
            should(validator.against({name: 'John', surname: 'Doe'})).not.have.property('otherEntity');
        });
    });

    context('#getValidationResult', () => {
        it('should return an object', () => {
            should(validator.getValidationResult()).be.an.Object();
            should(validator.getValidationResult()).have.property('hasFailed');
            should(validator.getValidationResult()).have.property('hasWarning');
            should(validator.getValidationResult()).have.property('message');
        });

        it('should be true for warning property if invalidState is WARNING', () => {
            validator.onInvalidReturn(WARNING);
            should(validator.getValidationResult()).have.properties({hasWarning: true});
            should(validator.getValidationResult()).have.properties({hasFailed: false});
        });

        it('should be true for danger property if invalidState is ERROR', () => {
            validator.onInvalidReturn(ERROR);
            should(validator.getValidationResult()).have.properties({hasFailed: true});
            should(validator.getValidationResult()).have.properties({hasWarning: false});
        });
    });
});
