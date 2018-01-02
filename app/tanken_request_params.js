module.exports.TankenRequestParams = class TankenRequestParams {

  constructor(latitude, longitude, radius, fuels) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.radius = radius;
    this.fuels = fuels;
  }

  toForm() {
    return {
      "lat": this.latitude,
      "lng": this.longitude,
      "radius": this.radius,
      "fuels": this.fuels  
    }
  }
}
