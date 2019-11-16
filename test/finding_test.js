const assert = require('assert');
const MarioChar = require('../models/mariokart');

// Describe Tests
describe('finding records', () => {
  // Create another Mocha 'hook'

  let char;
  beforeEach(done => {
    char = new MarioChar({
      name: 'Mario'
    });

    // Asynchronous method.  Have to use .then() to return the promise.
    // We use the save() method on the 'instance' of the model!!
    char.save().then(() => {
      done();
    });
  });

  // Create Tests
  it('find one record by name from the database', done => {
    MarioChar.findOne({ name: 'Mario' }).then(result => {
      assert(result.name === 'Mario');
      done();
    });
  });

  it('find one record by ID from the database', done => {
    MarioChar.findOne({ _id: char._id }).then(result => {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
