module.exports.Cheapest = class Cheapest {
  constructor(stations) {
    this.stations = stations;
  }

  find() {
    var sortedByPrice = this.stations.sort(Cheapest.sortByPrice);
    var cheapestPrice = sortedByPrice[0].fuel.price;
    
    var ceapestStations = sortedByPrice.filter((station) => {
      return station.fuel.price == cheapestPrice;
    });

    var sortedByDistance = ceapestStations.sort(Cheapest.sortByDistance);

    return sortedByDistance[0];
  }

  static sortByPrice(a, b) {
    var piceA = a.fuel.price;
    var piceB = b.fuel.price; 

    if (piceA > piceB) {
      return 1;
    }
    if (piceA < piceB) {
      return -1;
    }
    return 0;

  };static sortByDistance(a, b) {
    var distanceA = a.distance;
    var distanceB = b.distance; 

    if (distanceA > distanceB) {
      return 1;
    }
    if (distanceA < distanceB) {
      return -1;
    }
    return 0;
  };
}