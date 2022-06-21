/* eslint-disable require-jsdoc */
class BankAccount {
  constructor() {
    this.balance = 0;
    this.statements = [];
  }

  depositMoney(amount) {
    if (amount <= 0) {
      throw new Error('Only positive amounts accepted');
    }
    this.balance += amount;
    this.createStatement('deposit', amount);
  }

  withdrawMoney(amount) {
    if (amount <= 0) {
      throw new Error('Only positive amounts accepted');
    } else if (amount > this.balance) {
      throw new Error('Not enough funds');
    }
    this.balance -= amount;
    this.createStatement('withdraw', amount);
  }

  createStatement(reason, amount) {
    const dateFormatted = this.createFormattedDate();
    const amount2D = amount.toFixed(2);
    const balance2D = this.balance.toFixed(2);
    switch (reason) {
      case 'deposit':
        const dStatement = `${dateFormatted} || ${amount2D} || || ${balance2D}`;
        this.statements.push(dStatement);
        break;
      case 'withdraw':
        const wStatement = `${dateFormatted} || || ${amount2D} || ${balance2D}`;
        this.statements.push(wStatement);
        break;
      default:
        throw new Error('error');
    };
  }

  printBankStatements() {
    console.log('date || credit || debit || balance');
    if (this.statements.length === 0) {
      const dateFormatted = this.createFormattedDate();
      const balance2D = this.balance.toFixed(2);
      console.log(`${dateFormatted} || || || ${balance2D}`);
    } else {
      this.statements.reverse().forEach((statement) => {
        console.log(statement);
      });
    };
  }

  createFormattedDate() {
    const date = new Date();
    const dateFormatted = date.toLocaleDateString();
    return dateFormatted;
  }
}

module.exports = BankAccount;
