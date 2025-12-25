const ParkingTicket = require('./ParkingTicket');
const SmallFeeStrategy = require('./SmallFeeStrategy');
const MediumFeeStrategy = require('./MediumFeeStrategy');
const LargeFeeStrategy = require('./LargeFeeStrategy');

class EntryPanel {
  generateTicket(vehicle, parkingFloors) {
    for (let floor of parkingFloors) {
      if (!floor.isFull()) {
        const spot = floor.getAvailableSpotForVehicle();
        spot.parkVehicle(vehicle);

        let strategy;
        if (vehicle.getType() === 'Small') strategy = new SmallFeeStrategy();
        else if (vehicle.getType() === 'Medium') strategy = new MediumFeeStrategy();
        else strategy = new LargeFeeStrategy();

        return new ParkingTicket(
          `${vehicle.getVehicleId()}-${Date.now()}`,
          vehicle,
          strategy
        );
      }
    }
    return null;
  }
}

module.exports = EntryPanel;
