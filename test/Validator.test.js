
const should = require('should');
const sinon = require('sinon');
const Validator = require('../src/Validator');


describe('Validator', () => {

  let validator;

  beforeEach(() => {
     validator = new Validator('An error message', null);
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
