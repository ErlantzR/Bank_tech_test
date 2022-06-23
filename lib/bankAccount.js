/* eslint-disable require-jsdoc */
class BankAccount {
  constructor(bankStatement, transactionHistory) {
    this.balance = 0;
    this.statements = bankStatement;
    this.transactions = transactionHistory;
  }

  depositMoney(amount) {
    if (amount <= 0) {
      throw new Error('Only positive amounts accepted');
    }
    this.balance += amount;
    this.transactions.insertTransaction(this.statements
        .createStatement('deposit', amount, this.balance));
  }

  withdrawMoney(amount) {
    if (amount <= 0) {
      throw new Error('Only positive amounts accepted');
    } else if (amount > this.balance) {
      throw new Error('Not enough funds');
    }
    this.balance -= amount;
    this.transactions.insertTransaction(this.statements
        .createStatement('withdraw', amount, this.balance));
  }

  printBankStatements() {
    this.statements.printStatements(this.transactions.transactions);
  }
}

module.exports = BankAccount;
