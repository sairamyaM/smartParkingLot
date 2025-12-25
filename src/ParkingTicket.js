class ParkingTicket {
  constructor(ticketId, vehicle, feeStrategy) {
    this.ticketId = ticketId;
    this.vehicle = vehicle;
    this.feeStrategy = feeStrategy;
    this.entryTime = new Date();
    this.exitTime = null;
    this.amount = 0;
  }

  calculateAmount() {
    this.amount = this.feeStrategy.calculateFee();
  }

  closeTicket() {
    this.exitTime = new Date();
  }
}

module.exports = ParkingTicket;
