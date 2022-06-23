/* eslint-disable require-jsdoc */
class BankStatement {
  constructor() {
    this.statements = [];
  }

  createFormattedDate() {
    const date = new Date();
    const dateFormatted = date.toLocaleDateString();
    return dateFormatted;
  }

  createStatement(reason, amount, balance) {
    const dateFormatted = this.createFormattedDate();
    const amount2D = amount.toFixed(2);
    const balance2D = balance.toFixed(2);
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
        throw new Error('Reason for statement not recognised');
    }
  }

  printStatements() {
    console.log('date || credit || debit || balance');
    if (this.statements.length === 0) {
      const dateFormatted = this.createFormattedDate();
      console.log(`${dateFormatted} || || || 0.00`);
    } else {
      this.statements.reverse().forEach((statement) => {
        console.log(statement);
      });
    };
  }
}

module.exports = BankStatement;
