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
  }

  createStatement(reason, amount) {
    const date = new Date();
    const dateFormatted = date.toLocaleDateString("en-GB", { 
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    const newStatement = `${dateFormatted} || ${Number(amount).toFixed(2)} || || ${Number(this.balance).toFixed(2)}`
    this.statements.push(newStatement)
  }

  printBankStatements() {
    console.log("date || credit || debit || balance")
    if (this.statements.length === 0) {
      const date = new Date();
      const dateFormatted = date.toLocaleDateString("en-GB", { 
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      });
      console.log(`${dateFormatted} || || || ${Number(this.balance).toFixed(2)}`);
    } else {
      this.statements.forEach((statement) => {
        console.log(statement);
      });
    };
  }
}

module.exports = BankAccount;