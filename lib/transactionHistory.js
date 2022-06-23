/* eslint-disable require-jsdoc */
class TransactionHistory {
  constructor() {
    this.transactions = [];
  }

  insertTransaction(statement) {
    this.transactions.unshift(statement);
  }
}

module.exports = TransactionHistory;
