import suggestGarment from './../../js/utils/suggest_garment';

import _ from 'lodash';

let rainyGarments = ['Rain Coat', 'Umbrella', 'Rain Boots', 'Poncho'];

describe('suggestGarment', function () {
  describe('Winter temperatures', function () {
    let temp = _.random(0, 40);

    it('should suggest an appropriate outfit', function (done) {
      suggestGarment(temp, 'Sunny').should.equal('Winter Coat');

      done();
    });

    describe('Rainy conditions', function () {
      // Because frozen rain is still cold enough to warrant a winter coat :(
      it('should still suggest a winter outfit', function (done) {
        suggestGarment(temp, 'Rain').should.equal('Winter Coat');

        done();
      });
    });
  });

  describe('Chilly temperatures', function () {
    let temp = _.random(41, 50);

    it('should suggest an appropriate outfit', function (done) {
      suggestGarment(temp, 'Sunny').should.equal('Fall Jacket');

      done();
    });

    describe('Rainy conditions', function () {
      // Because most fall jackets can accomodate rain
      it('should still suggest a winter outfit', function (done) {
        suggestGarment(temp, 'Rain').should.equal('Fall Jacket');

        done();
      });
    });
  });

  describe('Cool temperatures', function () {
    let temp = _.random(51, 60);

    it('should suggest an appropriate outfit', function (done) {
      suggestGarment(temp, 'Sunny').should.equal('Light Jacket');

      done();
    });

    describe('Rainy conditions', function () {
      it('should suggest a rain-appropriate garment', function (done) {
        let garment = suggestGarment(temp, 'Rainy');
        _.includes(rainyGarments, garment).should.be.exactly(true);

        done();
      });
    });
  });

  describe('Warm temperatures', function () {
    let temp = _.random(61, 70);

    it('should suggest an appropriate outfit', function (done) {
      suggestGarment(temp, 'Sunny').should.equal('Sweater');

      done();
    });

    describe('Rainy conditions', function () {
      it('should suggest a rain-appropriate garment', function (done) {
        let garment = suggestGarment(temp, 'Rainy');
        _.includes(rainyGarments, garment).should.be.exactly(true);

        done();
      });
    });
  });

  describe('Hot temperatures', function () {
    let temp = _.random(71, 82);

    it('should suggest an appropriate outfit', function (done) {
      suggestGarment(temp, 'Sunny').should.equal('T-Shirt');

      done();
    });

    describe('Rainy conditions', function () {
      it('should suggest a rain-appropriate garment', function (done) {
        let garment = suggestGarment(temp, 'Rainy');
        _.includes(rainyGarments, garment).should.be.exactly(true);

        done();
      });
    });
  });

  describe('Sweltering temperatures', function () {
    let temp = _.random(83, 95);

    it('should suggest an appropriate outfit', function (done) {
      suggestGarment(temp, 'Sunny').should.equal('Bathing Suit');

      done();
    });

    describe('Rainy conditions', function () {
      it('should suggest a rain-appropriate garment', function (done) {
        let garment = suggestGarment(temp, 'Rainy');
        _.includes(rainyGarments, garment).should.be.exactly(true);

        done();
      });
    });
  });

  describe('Searing temperatures', function () {
    let temp = _.random(95, 130);

    it('should suggest an appropriate outfit', function (done) {
      suggestGarment(temp, 'Sunny').should.equal('Birthday Suit');

      done();
    });

    describe('Rainy conditions', function () {
      // This condition most likely wouldn't happen, since it's usually chillier
      // when raining, but if it did, it's probably appreciated, and far too hot
      // for something like a rain coat!
      it('should still suggest a winter outfit', function (done) {
        suggestGarment(temp, 'Rain').should.equal('Birthday Suit');

        done();
      });
    });
  });
});
