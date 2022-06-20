const BankAccount = require("./bankAccount")

describe("BankAccount", () => {
  it("When an instance is created, it has a balance of 0", () => {
    const account = new BankAccount;

    expect(account.balance).toBe(0);
  });

  describe("#depositMoney(amount)", () => {
    it("increases the balance by the amount given as an argument", () => {
      const account = new BankAccount;

      account.deposit(100);

      expect(account.balance).toBe(100);
    })
  })

  describe("#withdrawMoney(amount)", () => {
    it("decreases the balance by the amount given as an argument", () => {
      const account = new BankAccount;
      account.deposit(200);

      account.withdraw(100);

      expect(account.balance).toBe(100);
    })
  })
})