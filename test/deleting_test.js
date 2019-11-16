const assert = require('assert');
const MarioChar = require('../models/mariokart');

// Describe Tests
describe('deleting records', () => {
  // Create another Mocha 'hook'.  Before each it() block run this code
  let char;
  beforeEach(done => {
    char = new MarioChar({
      name: 'Mario'
    });

    // Asynchronous method.  Have to use .then() to return the promise.
    // We use the save() method on the 'instance' of the model!!
    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });

  // Create Tests
  it('delete one record from the database', done => {
    MarioChar.findOneAndRemove({ name: 'Mario' }).then(() => {
      MarioChar.findOne({ name: 'Mario' }).then(result => {
        assert(result === null);
        done();
      });
    });
  });
});
