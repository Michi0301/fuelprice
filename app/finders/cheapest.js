module.exports.Cheapest = class Cheapest {
  constructor(stations) {
    this.stations = stations;
  }

  find() {
    let sortedByPrice = this.stations.sort(Cheapest.sortByPrice);
    let cheapestPrice = sortedByPrice[0].fuel.price;
    
    let ceapestStations = sortedByPrice.filter((station) => {
      return station.fuel.price == cheapestPrice;
    });

    let sortedByDistance = ceapestStations.sort(Cheapest.sortByDistance);

    return sortedByDistance[0];
  }

  static sortByPrice(a, b) {
    let piceA = a.fuel.price;
    let piceB = b.fuel.price;

    if (piceA > piceB) {
      return 1;
    }
    if (piceA < piceB) {
      return -1;
    }
    return 0;
  };

  static sortByDistance(a, b) {
    let distanceA = a.distance;
    let distanceB = b.distance;

    if (distanceA > distanceB) {
      return 1;
    }
    if (distanceA < distanceB) {
      return -1;
    }
    return 0;
  };
}