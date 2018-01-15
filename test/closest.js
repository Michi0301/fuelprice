const chai = require("chai");
const expect = chai.expect;
const assert = require("assert");
const Closest = require("../app/finders/closest").Closest;
const Station = require("../app/station").Station;

describe("Closest", () => {
  const closestStation = new Station("Close brand", "Close name", "address", 1, "fuel");
  const distantStation = new Station("Distant brand", "Distant name", "address", 10, "fuel");
  const closest = new Closest([closestStation, distantStation]);

  describe("#find()", () => {
    it("returns the closest station", () => {
      expect(closest.find()).to.equal(closestStation);
    });
  });
});