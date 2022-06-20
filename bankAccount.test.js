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
      account.deposit(100);

      expect(account.balance).toBe(100);
    });

    it("throws an error if amount <= 0", () => {
      expect(() => {
        account.deposit(-50);
      }).toThrow("Only positive amounts accepted");
    });
  })

  describe("#withdrawMoney(amount)", () => {
    it("decreases the balance by the amount given as an argument", () => {
      account.deposit(200);

      account.withdraw(100);

      expect(account.balance).toBe(100);
    });

    it("throws an error if trying to withdraw a negative number", () => {
      
      expect(() => {
        account.withdraw(-20);
      }).toThrow("Only positive amounts accepted");
    })
  })
})