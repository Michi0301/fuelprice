let chai = require("chai");
let expect = chai.expect;
let assert = require("assert");
let TankenRequestParser = require("../app/tanken_request_parser.js").TankenRequestParser;

describe("tankenRequestParser", function() {
  let fs = require("fs");
  let path = require("path");
  let response = fs.readFileSync(
    path.join(__dirname, "fixtures/tanken_response.txt")).toString();
  let parser = new TankenRequestParser(response);

  describe("#parse", function() {
    it("returns a promise", function() {
      let promise = parser.getPromise();

      expect(promise).to.be.a("promise");
    });

    describe("when promise is resolved", function() {
      it("returns an array", function() {
        let promise = parser.getPromise();

        return promise.then((result) => {
          expect(result).to.be.a("array");
        });
      });

      it("contains stations", function() {
        let promise = parser.getPromise();

        return promise.then((result) => {
          expect(result[0]).to.be.a("object");
          expect(result[0].brand).to.eq("OMV");
          expect(result[0].address.city).to.eq("Dachau");
          expect(result[0].fuel.kind).to.eq("super");
        });
      });
    });
  });
});
