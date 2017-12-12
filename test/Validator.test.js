
const should = require('should');
const Validator = require('../src/Validator');


describe('Validator', () => {

  context('#validate', () => {

    const validator = new Validator();

    it('should return undefined if validation passes', () => {
      should(validator.validate()).be.undefined();
    });

    it('should throw Error if validation fails', () => {
      should(() => {
        validator.validate();
      }).throw(Error);
    });

  });

});
