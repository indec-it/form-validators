
const should = require('should');
const Validator = require('../src/AlwaysTrueValidator');


describe('AlwaysTrueValidator', () => {

  context('#isValid', () => {

    it('should be true', () => {

      should(new Validator().isValid()).be.true();

    });

  });

});
