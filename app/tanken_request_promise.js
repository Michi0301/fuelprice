const Unirest = require("unirest"),
      endpoint = "http://tanken.t-online.de/api/v1/search.xml";

module.exports.TankenRequestPromise = class TankenRequestPromise {
  constructor(params) {
    this.params = params;
  };

  getPromise() {
    return new Promise((resolve, reject) => {
      let request = Unirest("GET", endpoint);

      request.headers({
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded"
      });

      request.form(this.params.toForm());  

      request.end((response) => {
        resolve(response.body);
      });
    });
  }
}
