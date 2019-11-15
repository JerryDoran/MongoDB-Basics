const assert = require("assert");
const MarioChar = require("../models/mariokart");

// Describe Tests
describe("saving records", () => {
  // Create Tests
  it("Saves record to database", done => {
    let char = new MarioChar({
      name: "Mario"
    });

    // Asynchronous method.  Have to use .then() to return the promise.
    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });
});
