var chai = require("chai");
var expect = chai.expect;
var assert = require("assert");
var TankenRequestParams = require("../app/tanken_request_params.js").TankenRequestParams;

describe("tankenRequestParams", function() {
  var params = new TankenRequestParams("latitude", "longitude", "radius", "fuel")

  describe("#toForm", function() {
    it("returns a form object", function() {
      expect(params.toForm()).to.eql(
        {
          "lat": "latitude",
          "lng": "longitude",
          "radius": "radius",
          "fuels": "fuel"
        }
      )
    });
  });
});
