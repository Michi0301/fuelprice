var unirest = require("unirest");
    xml2js = require('xml2js'),
    parser = new xml2js.Parser()

const tankenEndpoint = "http://tanken.t-online.de/api/v1/search.xml";

module.exports.TankenRequest = class TankenRequest {

  constructor(tankenRequestParams, handler) {
    this.tankenRequestParams = tankenRequestParams;
    this.request = unirest("POST", tankenEndpoint);

    this.handler = handler
  }

  perform() {
    this.request.headers({
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded"
    });

    this.request.form(this.tankenRequestParams.toForm());  

    this.request.end((response) => this.handleResponse(response))
  }

  handleResponse(response) {
    if (response.error) throw new Error(response.error);
    this.handler(response);
  }
}
