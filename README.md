# Library System

An online library application developed with MEAN Stack. The application allows librarians to input data via [Google Books API](https://developers.google.com/books/docs/overview), register book statuses and checks in and out books to users. Also users have the ability to search available books in the library.

## Install project dependencies

- Install nodejs and npm
- Install Mongo DB
- Install Angular-cli version 8 and above globally
- Install nodejs deps via `npm install`
- Create .env file with all the required global variables based on .env.example file.

## Development server

1. Compile Angular Client Side code.

```
$ ng build
```

2. Start mongo db.

```
$ sudo mongod
```

3. Start the server

```
$ node app.js
```

### Usage

#### Create employee data and grant access
1. Go to `/admin` and login in with the Admin email address and password saved in the .env file.

2. Select the Admins page and fill out all the input to create a new lbrarian data. After the data has been created, make sure to select the can access Keystone button.

3. Go to `/office` and login with the same email and password.

#### Creat book data

1. Go to `/office` and click the Add Data. Search any desired book by filling the input. Select the searched data below the input form. Once the data is presented, select the Save Book button.

2. Return back to the main `/office` and select Add Book button. Enter the the title of the book saved previously from the Add Data page. At the bottom of the page, enter the number of books to be added in the library.

3. Go to `/`, the home page and enter the title, author, or the genre of the saved book.

#### Lend and return books to users

1. Go to `/admin` and click Users. Create a new user data by entering all the input.

2. Go to `/office` and click CheckInOut. Enter the first and last name of the user. If a user data exists, the data will present in the bottom of the form.

3. To lend a book, search the title of the book. If a user wants to return a book, click the return button next to the barrowed book.

## Production Server

1. Compile client side angular code.

```
$ ng build --prod
```

2. Start the mongo db.

```
$ sudo mongod
```

3. Start the server

```
$ node app.js
```

## Testing

### Testing API/Server

```
$ sudo mongod
$ npm test
```

## Available Routes

- Home Page `/`
- Office Page `/office`
- Admin Page `/admin`
