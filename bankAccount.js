class BankAccount {
  constructor() {
    this.balance = 0;
    this.statements = [];
  }

  depositMoney(amount) {
    if (amount <= 0) {
      throw "Only positive amounts accepted";
    }
    this.balance += amount;
    this.createStatement("deposit", amount);
  }

  withdrawMoney(amount) {
    if (amount <= 0) {
      throw "Only positive amounts accepted";
    } else if (amount > this.balance) {
      throw "Not enough funds";
    }
    this.balance -= amount;
    this.createStatement("withdraw", amount);
  }

  createStatement(reason, amount) {
    const dateFormatted = this.createFormattedDate()
    switch(reason) {
      case "deposit":
        const depositStatement = `${dateFormatted} || ${Number(amount).toFixed(2)} || || ${Number(this.balance).toFixed(2)}`;
        this.statements.push(depositStatement);
        break;
      case "withdraw":
        const withdrawStatement = `${dateFormatted} || || ${Number(amount).toFixed(2)} || ${Number(this.balance).toFixed(2)}`;
        this.statements.push(withdrawStatement);
        break;
      default:
        throw "error"
    };
  }

  printBankStatements() {
    console.log("date || credit || debit || balance")
    if (this.statements.length === 0) {
      const dateFormatted = this.createFormattedDate()
      console.log(`${dateFormatted} || || || ${Number(this.balance).toFixed(2)}`);
    } else {
      this.statements.reverse().forEach((statement) => {
        console.log(statement);
      });
    };
  }

  createFormattedDate() {
    const date = new Date();
    const dateFormatted = date.toLocaleDateString("en-GB", { 
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    return dateFormatted
  }
}

module.exports = BankAccount;