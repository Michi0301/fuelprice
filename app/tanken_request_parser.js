var xml2js = require('xml2js'),
    Station = require("./station.js").Station;
    StationAddress = require("./station.js").StationAddress;
    StationFuel = require("./station.js").StationFuel

module.exports.TankenRequestParser = class TankenRequestParser {

  constructor(xml){
    this.xml = xml;
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      let parser = new xml2js.Parser();

      parser.parseString(this.xml, (err, result) => {
        var rawGasStations = result["search"]["gasStations"];

        var gasStations = TankenRequestParser.buildGasStations(rawGasStations[0]["gasStation"]);

        resolve(gasStations);
      });
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