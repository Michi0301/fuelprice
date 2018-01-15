module.exports.Station = class Station {
  constructor(brand, name, address, distance, fuel) {
    this.brand = brand;
    this.name = name;
    this.address = address;
    this.distance = distance;
    this.fuel = fuel;
  }
}

module.exports.StationAddress = class StationAddress {
  constructor(street, zip, city, lat, lng) {
    this.street = street;
    this.zip = zip;
    this.city = city;
    this.lat = lat;
    this.lng = lng;
  }
}

module.exports.StationFuel = class StationFuel {
  constructor(kind, price, timestamp) {
    this.kind = kind;
    this.price = price;
    this.timestamp = timestamp;
  }
}