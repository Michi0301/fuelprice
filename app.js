const tankenEndpoint = "http://tanken.t-online.de/api/v1/search.xml",
      latitude = "48.2324239",
      longitude = "11.479551300000026",
      radius = "5",
      fuels = "super";

var unirest = require("unirest"),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser(),
		request = unirest("POST", tankenEndpoint);

request.headers({
  "Cache-Control": "no-cache",
  "Content-Type": "application/x-www-form-urlencoded"
});

request.form({
  "lat": latitude,
  "lng": longitude,
  "radius": radius,
  "fuels": fuels
});

request.end(function (res) {
  if (res.error) throw new Error(res.error);

  parser.parseString(res.body, function (err, result) {
    console.log(JSON.stringify(result));
  });
});
