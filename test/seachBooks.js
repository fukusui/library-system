var chai = require('chai');
var chaiHttp = require('chai-http');
var keystone = require('../app');
var app = keystone.app;
chai.should();
chai.use(chaiHttp);

var adminData = {email: 'test@keystone.com ', password: 'test125'};

describe('Book Seach Term Test', () => {
  var Admin = keystone.list('Admin');
  var Author = keystone.list('Author');
  var Book = keystone.list('Book');
  var newAdmin = new Admin.model(adminData);
  newAdmin.save();
  var adminId = newAdmin._id;
  var token = newAdmin.generateJwt();

	describe('', () => {

    it('should /GET books based on Search Queries', (done) => {
      let book = {
        title:"World Map",
        author: [{first_name: "Luciano", last_name: "Pizzano"}],
        genre: "Geography",
        isbn: "5660553804577",
        img: "google.com"
      };
      chai.request(app)
        .post('/api/book/create')
        .set({ Authorization: `Bearer ${token}`})
        .send(book)
        .end((err, res) => {
          let search = {
            title: "World Map"
          }
          chai.request(app)
            .post('/api/book/search')
            .send(search)
            .end((err, res) => {
              console.log(res.body);
              done();
            });
        });
    });
  });

  afterEach((done) => {
    Admin.model.findByIdAndRemove(adminId, (err, data) => {});
    Author.model.remove({}, (err, data) => {});
	  Book.model.remove({}, (err, data) => {});
    done();
  });
});
