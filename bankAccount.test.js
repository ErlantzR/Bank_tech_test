const BankAccount = require("./bankAccount")

describe("class BankAccount ", () => {
  it("When an instance is created, it has a balance of 0", () => {
    const account = new BankAccount;

    expect(account.balance).toBe(0);
  });
})