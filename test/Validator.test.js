
const should = require('should');
const sinon = require('sinon');
const Validator = require('../src/Validator');


describe('Validator', () => {

  let validator;

  beforeEach(() => {
     validator = new Validator('An error message', null);
  });


  context('#validate', () => {

    it('should return undefined if validation passes', () => {

      sinon.stub(validator, 'isValid').returns(true);

      should(validator.validate()).be.undefined();

      validator.isValid.restore();

    });

    it('should throw Error if validation fails', () => {

      sinon.stub(validator, 'isValid').returns(false);

      should(() => {
        validator.validate();
      }).throw('An error message');

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

});

//mocha js, sinon, should.
