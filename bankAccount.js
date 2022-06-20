class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw "Only positive amounts accepted";
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw "Only positive amounts accepted";
    }
    this.balance -= amount;
  }
}

module.exports = BankAccount;