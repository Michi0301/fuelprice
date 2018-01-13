module.exports.TankenRequestParams = class TankenRequestParams {

  constructor(latitude, longitude, radius, fuel) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.radius = radius;
    this.fuel = fuel;
  }

  toForm() {
    return {
      "lat": this.latitude,
      "lng": this.longitude,
      "radius": this.radius,
      "fuels": this.fuel  
    }
  }
}
