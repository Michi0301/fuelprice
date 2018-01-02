var TankenRequestParams = require("./app/tanken_request_params.js").TankenRequestParams;
var TankenRequest = require("./app/tanken_request.js").TankenRequest;
var TankenRequestHandler = require("./app/tanken_request_handler.js").TankenRequestHandler;

var params = new TankenRequestParams("48.2324239", "11.479551300000026", "5", "super");
var request = new TankenRequest(params, TankenRequestHandler.logResponse);

request.perform();
