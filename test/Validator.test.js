
const should = require('should');
const sinon = require('sinon');
const Validator = require('../src/Validator');


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

});
