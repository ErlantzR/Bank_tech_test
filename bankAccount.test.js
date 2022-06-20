const BankAccount = require("./bankAccount")

describe("BankAccount", () => {
  beforeEach(() => {
    account = new BankAccount;
  });
  
  it("When an instance is created, it has a balance of 0", () => {

    expect(account.balance).toBe(0);
  });

  describe("#depositMoney(amount)", () => {
    it("increases the balance by the amount given as an argument", () => {
      account.depositMoney(100);

      expect(account.balance).toBe(100);
    });

    it("throws an error if amount <= 0", () => {
      expect(() => {
        account.depositMoney(-50);
      }).toThrow("Only positive amounts accepted");
    });
  });

  describe("#withdrawMoney(amount)", () => {
    it("decreases the balance by the amount given as an argument", () => {
      account.depositMoney(200);

      account.withdrawMoney(100);

      expect(account.balance).toBe(100);
    });

    it("throws an error if trying to withdraw a negative number", () => {
      
      expect(() => {
        account.withdrawMoney(-20);
      }).toThrow("Only positive amounts accepted");
    });

    it("throws an error if trying to withdraw an amount bigger than the balance", () => {
      account.depositMoney(50);

      expect(() => {
        account.withdrawMoney(100);
      }).toThrow("Not enough funds");
    });
  });

  describe("#printBankStatements()", () => {
    it("prints the titles and a balance of 0 when instance is created", () => {
      console.log = jest.fn();
      account.printBankStatements();
      const date = new Date()
      const dateFormatted = date.toLocaleDateString("en-GB", { day: 'numeric', month: 'numeric', year: 'numeric'});

      expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance");
      expect(console.log).toHaveBeenCalledWith(`${dateFormatted} || || || 0.00`);
    })
  })
})