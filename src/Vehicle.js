class Vehicle {
  constructor(vehicleId, type) {
    this.vehicleId = vehicleId;
    this.type = type;
  }

  getVehicleId() {
    return this.vehicleId;
  }

  getType() {
    return this.type;
  }
}

module.exports = Vehicle;
