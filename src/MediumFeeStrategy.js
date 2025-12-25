const ParkingTicketFeeStrategy = require('./ParkingTicketFeeStrategy');

class MediumFeeStrategy extends ParkingTicketFeeStrategy {
  calculateFee() {
    return 20;
  }
}

module.exports = MediumFeeStrategy;
