class PaymentProcessor {
  calculateFee(vehicle) {
    if (vehicle.getType() === 'Small') return 10;
    if (vehicle.getType() === 'Medium') return 20;
    if (vehicle.getType() === 'Large') return 30;
    return 0;
  }
}

module.exports = PaymentProcessor;
