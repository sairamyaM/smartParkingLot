class ParkingSpot {
  constructor(spotId, spotType) {
    this.spotId = spotId;
    this.spotType = spotType;
    this.isOccupied = false;
    this.vehicle = null;
  }

  parkVehicle(vehicle) {
    if (this.isOccupied) return false;
    this.vehicle = vehicle;
    this.isOccupied = true;
    return true;
  }

  removeVehicle() {
    this.vehicle = null;
    this.isOccupied = false;
  }

  isFree() {
    return !this.isOccupied;
  }
}

module.exports = ParkingSpot;
