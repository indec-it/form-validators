
const should = require('should');
const sinon = require('sinon');
const Validator = require('../src/Validator');
const {ERROR, WARNING} = require('../src/constants').validationStates;

describe('Validator', () => {

  let validator;

  beforeEach(() => {
     validator = new Validator('An error message', null);
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
});
