var Coder = require('node-geocoder');

module.exports.Geocoder = class Geocoder {

  constructor(location) {
    this.location = location;
  }

  getPromse() {
    var geocoder = Coder();

    return geocoder.geocode(this.location);
  }
}

