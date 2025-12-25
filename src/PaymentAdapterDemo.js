class OldPaymentProcessor {
  processPayment(amountInRupees) {
    console.log(`Deducting amount ${amountInRupees}`);
  }
}

class NewPaymentProcessor {
  executePayment(amountInPaisa) {
    console.log(`Deducting amount ${amountInPaisa}`);
  }
}

class PaymentAdapter {
  constructor(newPaymentProcessor) {
    this.newPaymentProcessor = newPaymentProcessor;
  }

  processPayment(amountInRupees) {
    this.newPaymentProcessor.executePayment(amountInRupees * 100);
  }
}

const paymentProcessor = new NewPaymentProcessor();
const paymentGateway = new PaymentAdapter(paymentProcessor);
paymentGateway.processPayment(10);
