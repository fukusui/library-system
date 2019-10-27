var chai = require('chai');
var chaiHttp = require('chai-http');
var keystone = require('../app');
var app = keystone.app;
var should = chai.should();
var assert = chai.assert;
chai.use(chaiHttp);

describe('User', () => {
  var User = keystone.list('User');
  var Admin = keystone.list('Admin');
  var adminData = {email: 'jack@keystone.com ',
      password: 'teisdst125'};
	var newAdmin = new Admin.model(adminData);
	newAdmin.save();
	var adminId = newAdmin._id;
	var token = newAdmin.generateJwt();

 	// beforeEach((done) => {
	// 	Admin.model.findByIdAndRemove(adminId, (err, data) => {});
	// 	User.model.remove({}, (err, data) => {});
	// 	done();
	// });

  describe('/GET User', () => {
    it('should POST/GET user at /api/user', (done) => {
      var userData = {email: 'test@gmail.com',
        name: {first: 'Zach', last: 'Shields'}}
      var newUser = new User.model(userData);
      newUser.save();
      var query = {name: {first: 'Zach', last: 'Shields'}}
      chai.request(app)
        .post('/api/user')
			  .set({ Authorization: `Bearer ${token}`})
        .send(query)
        .end((err, res) => {
 					res.should.have.status(200);
					assert.equal(res.body.length, 1);
					let user = res.body[0];
					assert(user.email === 'test@gmail.com');
					assert(user.name.first === 'Zach');
					assert(user.name.last === 'Shields');
          done();
        });
    });
  });
});
