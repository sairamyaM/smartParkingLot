class ParkingFloor {
  constructor(floorNumber, spots) {
    this.floorNumber = floorNumber;
    this.spots = spots;
  }

  isFull() {
    return this.spots.every(spot => !spot.isFree());
  }

  getAvailableSpotForVehicle() {
    return this.spots.find(spot => spot.isFree());
  }
}

module.exports = ParkingFloor;
