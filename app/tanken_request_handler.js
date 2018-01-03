var xml2js = require('xml2js'),
    parser = new xml2js.Parser(),
    xml2js = require('xml2js')
    Station = require("./station.js").Station;
    StationAddress = require("./station.js").StationAddress;
    StationFuel = require("./station.js").StationFuel,
    Cheapest = require("./finders/cheapest.js").Cheapest

module.exports.TankenRequestHandler = class TankenRequestHandler {

  static logResponse(response) {
    parser = new xml2js.Parser();

    parser.parseString(response.body, function (err, result) {
      var rawGasStations = result["search"]["gasStations"];

      var gasStations = TankenRequestHandler.buildGasStations(rawGasStations[0]["gasStation"]);

      var finder =  new Cheapest(gasStations);
      console.log(finder.find());
    });
  }

  static buildGasStations(gasStationsParams) {
    return gasStationsParams.map((stationParams) => {
      var address = new StationAddress(
        stationParams['$'].street,
        stationParams['$'].zip,
        stationParams['$'].city,
        stationParams['$'].lat,
        stationParams['$'].lng
      );

      var fuel = new StationFuel(
        stationParams.fuels[0].fuel[0]['$'].kind,
        parseFloat(stationParams.fuels[0].fuel[0]['$'].price), 
        stationParams.fuels[0].fuel[0]['$'].timestamp
      );

      return new Station(
        stationParams['$'].brand,
        stationParams['$'].name,
        address,
        parseFloat(stationParams['$'].distance),
        fuel
      );
    })
  }
}