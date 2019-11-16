const assert = require('assert');
const MarioChar = require('../models/mariokart');

// Describe Tests
describe('updating records', () => {
  // Create another Mocha 'hook'.  Before each it() block run this code
  let char;
  beforeEach(done => {
    char = new MarioChar({
      name: 'Mario',
      weight: 50
    });

    // Asynchronous method.  Have to use .then() to return the promise.
    // We use the save() method on the 'instance' of the model!!
    char.save().then(() => {
      done();
    });
  });

  // Create Tests
  it('update one record in the database', done => {
    MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }).then(
      () => {
        MarioChar.findOne({ _id: char._id }).then(result => {
          assert(result.name === 'Luigi');
          done();
        });
      }
    );
  });

  it('increment weight by one.', done => {
    // This will increment the weight by 1 in the database
    MarioChar.updateOne({}, { $inc: { weight: 1 } }).then(() => {
      MarioChar.findOne({ name: 'Mario' }).then(result => {
        assert(result.weight === 51);
        done();
      });
    });
  });
});
