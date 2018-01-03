var Geocoder = require('node-geocoder');
var geocoder = Geocoder();

module.exports.GoogleGeocoder = class GoogleGeocoder {

  constructor(location, handler) {
    this.location = location;
    this.handler = handler;
  }

  lookup() {
    geocoder.geocode(this.location)
    .then((res) => {
      var latitude = res[0].latitude;
      var longitude = res[0].longitude;

      console.log(latitude);
      console.log(longitude);

      this.handler(latitude, longitude);
    })
    .catch((err) => {
      console.log(err);
    });  
  }
}

