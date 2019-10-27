var chai = require('chai');
var chaiHttp = require('chai-http');
var keystone = require('../app');

var app = keystone.app;
chai.should();
// var expect = require('chai').expect;
chai.use(chaiHttp);

var adminData = {email: 'test@keystone.com ', password: 'test125'};
var bookData = {
  title:"The Google story",
  authors: [
    {first_name: "Mark", last_name: "Malseed"},
    {first_name: "Lilly", middle_name: "L", last_name: "Junior"},
    {existingId: "5d812808b2211643bfabadba"}
  ],
  genres: ["Computer Programs", "Spy"],
  isbn: "9780553804577"
};

describe('Book Test', () => {
  var Admin = keystone.list('Admin');
  var Author = keystone.list('Author');
  var Book = keystone.list('Book');
  var newAdmin = new Admin.model(adminData);
  newAdmin.save();
  var adminId = newAdmin._id;
  var token = newAdmin.generateJwt();

  beforeEach((done) => {
    // newAdmin.save();
    done();
  });

  describe('/POST Book', () => {

    it('should not /POST without token', (done) => {
      chai.request(app)
        .post('/api/book/create')
        .send(bookData)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });

    it('should /POST with corrcect inputs', (done) => {
      chai.request(app)
        .post('/api/book/create')
        .set({ Authorization: `Bearer ${token}`})
        .send(bookData)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });

  });

  describe('/GET book', (done) => {
    it('should /GET all the books', (done) => {
      chai.request(app)
        .get('/api/book')
        .end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					// res.body.length.should.be.eql(0);
          done();
        });
    });
  });

	describe('/GET/:id book', () => {
    it('should /GET /:id book', (done) => {
    let book = {
      title:"World Map",
      // authors: [{first_name: "Luciano", last_name: "Pizzano"}],
      authors: [],
      genres: ['Geography'],
      isbn: "5660553804577",
			img: "google.com"
    };
    chai.request(app)
      .post('/api/book/create')
      .set({ Authorization: `Bearer ${token}`})
      .send(book)
      .end((err, res) => {
        var id = res.body.newBook._id;
        chai.request(app)
          .get('/api/book/'+ id)
          .end((err, res) => {
            console.log(res.body);
            res.should.have.status(200);
						// res.body.should.have.property('title');
						// res.body.should.have.property('author');
						// res.body.should.have.property('img');
						// res.body.should.have.property('genre');
            // res.body.should.have.property('isbn');
            // res.body.should.have.property('_id').eql(id);
            done();
          })
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
