const mongoose = require('mongoose');

// USE ES6 PROMISES
mongoose.Promise = global.Promise;

// Connect to DB before running tests - This is a 'Mocha hook'
before(done => {
  // Connect to MongoDB
  mongoose.connect('mongodb://localhost/netninja', { useNewUrlParser: true });
  // mongoose.connect(
  //   'mongodb+srv://admin-jerry:Carmel101@cluster0-yclv3.mongodb.net/test?retryWrites=true&w=majority',
  //   { useNewUrlParser: true }
  // );

  mongoose.connection
    .once('open', () => {
      console.log('Successfully connected to MongoDB!');
      done();
    })
    .on('error', error => {
      console.log('Connection error:', error);
    });
});

// DROP THE 'mariochars' COLLECTION BEFORE EACH TEST
// I want to run this code before I run a test
beforeEach(done => {
  // Drop the collection - async method...have to run 'done()' method
  mongoose.connection.collections.mariochars.drop(() => {
    done();
  });
});
