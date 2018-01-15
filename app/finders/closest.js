module.exports.Closest = class Closest {
  constructor(stations) {
    this.stations = stations;
  }

  find() {
    let sortedByDistance = this.stations.sort(Closest.sortByDistance);

    return sortedByDistance[0];
  }

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