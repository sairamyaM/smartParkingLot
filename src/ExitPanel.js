class ExitPanel {
  processExit(ticket) {
    ticket.closeTicket();
    ticket.calculateAmount();
    ticket.spot?.removeVehicle();
    return ticket.amount;
  }
}

module.exports = ExitPanel;
