const ParkingTicketFeeStrategy = require('./ParkingTicketFeeStrategy');

class LargeFeeStrategy extends ParkingTicketFeeStrategy {
  calculateFee() {
    return 30;
  }
}

module.exports = LargeFeeStrategy;
