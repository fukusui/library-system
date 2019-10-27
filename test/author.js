var chai = require('chai');
var chaiHttp = require('chai-http');
var keystone = require('../app');
var app = keystone.app;
chai.should();
chai.use(chaiHttp);

var adminData = {email: 'test@keystone.com ', password: 'test125'};

describe('Author Search', () => {
  var Admin = keystone.list('Admin');
  var Author = keystone.list('Author');
  var newAdmin = new Admin.model(adminData);
  newAdmin.save();
  var adminId = newAdmin._id;
  var token = newAdmin.generateJwt();
  var newAuthor = Author.model({first_name: "Yukio", last_name: "Mishima"});
  newAuthor.save();

  describe('', () => {

    it('should /GET author based on Search Queries', (done) => {
      let author = {first_name: "Yukio"};
      chai.request(app)
        .post('/api/author/search')
        .send(author)
        .end((err, res) => {
          console.log(res.body)
          done();
        });
    });
  });
});
