import SuggestGarment from './../../js/utils/suggest_garment';

describe('SuggestGarment', function () {
  it('should suggest a garment', function (done) {
    SuggestGarment(35, 'Sunny').should.equal('Winter Coat');

    done();
  });
});
