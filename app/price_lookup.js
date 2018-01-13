const TankenRequestParams = require("./tanken_request_params.js").TankenRequestParams,
      TankenRequestPromise = require("./tanken_request_promise.js").TankenRequestPromise,
      Geocoder = require("./geocoder").Geocoder,
      TankenRequestParser = require("./tanken_request_parser.js").TankenRequestParser;
      Finder = require("./finders/cheapest.js").Cheapest;

module.exports.PriceLookup = class PriceLookup {

  constructor(fuel, location, radius) {
    this.fuel = fuel;
    this.location = location;
    this.radius = radius;
  }

  execute() {
    const loctionPromise = new Geocoder(this.location).findLocation();

    return loctionPromise.then((result) => {
      const latitude = result[0].latitude;
      const longitude = result[0].longitude;

      return { latitude: latitude, longitude: longitude };
    }).then((coordinates) => {

      const params = new TankenRequestParams(coordinates.latitude, coordinates.longitude, this.radius, this.fuel);
      
      return new TankenRequestPromise(params).getPromise();
    }).then((xml) => {
      return new TankenRequestParser(xml).getPromise();
    })
  }
}
