/* eslint-disable require-jsdoc */
class BankStatement {
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
        return `${dateFormatted} || ${amount2D} || || ${balance2D}`;
        break;
      case 'withdraw':
        return `${dateFormatted} || || ${amount2D} || ${balance2D}`;
        break;
      default:
        throw new Error('Reason for statement not recognised');
    }
  }

  printStatements(statements) {
    console.log('date || credit || debit || balance');
    if (statements.length === 0) {
      const dateFormatted = this.createFormattedDate();
      console.log(`${dateFormatted} || || || 0.00`);
    } else {
      statements.forEach((statement) => {
        console.log(statement);
      });
    };
  }
}

module.exports = BankStatement;
