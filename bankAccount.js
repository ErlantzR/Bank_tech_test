class BankAccount {
  constructor() {
    this.balance = 0;
  }

  depositMoney(amount) {
    if (amount <= 0) {
      throw "Only positive amounts accepted";
    }
    this.balance += amount;
  }

  withdrawMoney(amount) {
    if (amount <= 0) {
      throw "Only positive amounts accepted";
    } else if (amount > this.balance) {
      throw "Not enough funds";
    }
    this.balance -= amount;
  }
}

module.exports = BankAccount;