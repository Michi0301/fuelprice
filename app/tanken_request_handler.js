var xml2js = require('xml2js'),
    parser = new xml2js.Parser(),
    xml2js = require('xml2js')
    Station = require("./station.js").Station;
    StationAddress = require("./station.js").StationAddress;
    StationFuel = require("./station.js").StationFuel;

module.exports.TankenRequestHandler = class TankenRequestHandler {

  static logResponse(response) {
    parser = new xml2js.Parser();

    parser.parseString(response.body, function (err, result) {
      var rawGasStations = result["search"]["gasStations"];

      var gasStations = TankenRequestHandler.buildGasStations(rawGasStations[0]["gasStation"]);
      console.log(gasStations);
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
        stationParams.fuels[0].fuel[0]['$'].price, 
        stationParams.fuels[0].fuel[0]['$'].timestamp
      );

      return new Station(
        stationParams['$'].brand,
        stationParams['$'].name,
        address,
        stationParams['$'].distance,
        fuel
      );
    })
  }
}