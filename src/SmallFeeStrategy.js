const ParkingTicketFeeStrategy = require('./ParkingTicketFeeStrategy');

class SmallFeeStrategy extends ParkingTicketFeeStrategy {
  calculateFee() {
    return 10;
  }
}

module.exports = SmallFeeStrategy;
