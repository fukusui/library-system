var chai = require('chai');
var chaiHttp = require('chai-http');
var keystone = require('../app');

var app = keystone.app;
chai.should();
chai.use(chaiHttp);

describe('Genre Test', () => {
  var Genre = keystone.list('Genre');
  let genreData = {name: "Trojan"};
  var newGenre = new Genre.model(genreData);
  var id = newGenre._id;
  newGenre.save();
  console.log(newGenre);

  describe('Genre', () => {
    it('should /GET /:id book', (done) => {
      chai.request(app)
        .get('/api/genre/'+ id)
        .end((err, res) => {
          console.log(res.body);
          done();
        });
    });
  });

  afterEach((done) => {
    Genre.model.findByIdAndRemove(id, (err, data) => {});
  })

});
