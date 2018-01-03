var TankenRequestParams = require("./app/tanken_request_params.js").TankenRequestParams;
    TankenRequest = require("./app/tanken_request.js").TankenRequest,
    TankenRequestHandler = require("./app/tanken_request_handler.js").TankenRequestHandler,
    Geocoder = require("./app/google_geocoder").GoogleGeocoder

const location = "München",
      radius = "1",
      fuel = "super"


var geocoder = new Geocoder(location, (latitude, longitude) => {
  var params = new TankenRequestParams(latitude, longitude, radius, fuel);  
  var request = new TankenRequest(params, TankenRequestHandler.logResponse);

  request.perform();
}).lookup();
