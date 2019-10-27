var keystone = require('../app');
var db = keystone.mongoose.connection;
var config = require('../api/config/database');

console.log(config.db.test);

beforeEach((done) => {

  function clearDB() {
    for (var i in db.collections) {
      db.collections[i].remove(()=>{});
    }
    return done();
  }

  if (db.readyState === 0) {
    keystone.mongoose.connect(config.db.test, function (err) {
      if (err) {
        throw err;
      }
      return clearDB();
    });
  } else {
    return clearDB();
  }
});

afterEach((done) => {
  keystone.mongoose.disconnect();
  return done();
});
