const TankenRequestParams = require("./app/tanken_request_params.js").TankenRequestParams,
      TankenRequestPromise = require("./app/tanken_request_promise.js").TankenRequestPromise,
      Geocoder = require("./app/geocoder").Geocoder,
      TankenRequestParser = require("./app/tanken_request_parser.js").TankenRequestParser;
      Finder = require("./app/finders/cheapest.js").Cheapest;

const location = "München",
      radius = "5",
      fuel = "diesel"

const loctionPromise = new Geocoder(location).findLocation();

loctionPromise.then((result) => {
  const latitude = result[0].latitude;
  const longitude = result[0].longitude;

  return { latitude: latitude, longitude: longitude };
}).then((coordinates) => {

  const params = new TankenRequestParams(coordinates.latitude, coordinates.longitude, radius, fuel);
  
  return new TankenRequestPromise(params).getPromise();
}).then((xml) => {
  return new TankenRequestParser(xml).getPromise();
}).then((stations) => {
  console.log(new Finder(stations).find());
})
