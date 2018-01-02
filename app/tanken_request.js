var unirest = require("unirest");
    xml2js = require('xml2js'),
    parser = new xml2js.Parser()

const tankenEndpoint = "http://tanken.t-online.de/api/v1/search.xml";

module.exports.TankenRequest = class TankenRequest {

  constructor(tankenRequestParams) {
    this.tankenRequestParams = tankenRequestParams;
    this.request = unirest("POST", tankenEndpoint);
  }

  perform() {
    this.request.headers({
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded"
    });

    this.request.form(this.tankenRequestParams.toForm());  

    this.request.end(function (response) {
      if (response.error) throw new Error(response.error);

      parser.parseString(response.body, function (err, result) {
        console.log(JSON.stringify(result));
      });
    });
  }
}
