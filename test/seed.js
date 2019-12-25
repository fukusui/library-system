// Saving sample data for client side testing purpose  //
var keystone = require('../app');
var Admin = keystone.list('Admin');
var Author = keystone.list('Author');
var Book = keystone.list('Book');
var BookInstance = keystone.list('BookInstance');
var Genre = keystone.list('Genre');
var User = keystone.list('User');

var seedData = require('./test-data');
try {

  var newAdmin = new Admin.model(seedData.admin);
	newAdmin.save();

  var newUser = new User.model(seedData.user);
	newUser.save();

	var newGenre = new Genre.model(seedData.genre);
	var genreId = newGenre._id;
	newGenre.save();

	var newAuthor = new Author.model(seedData.author);
	var authorId = newAuthor._id;
	newAuthor.save();

  var bookData = seedData.book;
  bookData.author = authorId;
  bookData.genre = genreId;
  var newBook = new Book.model(bookData);
  var bookId = newBook._id;
	newBook.save();

  var bookInstance = seedData.bookInstance;
  bookInstance.book = bookId;
	var newInstance = new BookInstance.model(bookInstance);
	newInstance.save();

} catch(err) {
	console.log(err);
} finally {

  setTimeout((function() {
      return process.kill(process.pid);
  }), 5000);

}
