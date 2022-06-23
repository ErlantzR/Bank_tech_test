const BankStatement = require('./bankStatement');

/* eslint-disable require-jsdoc */
class BankAccount {
  constructor() {
    this.balance = 0;
    this.statements = new BankStatement;
  }

  depositMoney(amount) {
    if (amount <= 0) {
      throw new Error('Only positive amounts accepted');
    }
    this.balance += amount;
    this.statements.createStatement('deposit', amount, this.balance);
  }

  withdrawMoney(amount) {
    if (amount <= 0) {
      throw new Error('Only positive amounts accepted');
    } else if (amount > this.balance) {
      throw new Error('Not enough funds');
    }
    this.balance -= amount;
    this.statements.createStatement('withdraw', amount, this.balance);
  }

  printBankStatements() {
    this.statements.printStatements();
  }
}

module.exports = BankAccount;
