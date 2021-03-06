const BankAccount = require('../lib/bankAccount');
const BankStatement = require('../lib/bankStatement');
const TransactionHistory = require('../lib/transactionHistory');
jest.mock('../lib/bankStatement');
jest.mock('../lib/transactionHistory');

describe('BankAccount', () => {
  beforeEach(() => {
    mockBankStatement = new BankStatement;
    mockTransactionHistory = new TransactionHistory;
    account = new BankAccount(mockBankStatement, mockTransactionHistory);
  });
  it('When an instance is created, it has a balance of 0', () => {
    expect(account.balance).toBe(0);
  });

  describe('#depositMoney(amount)', () => {
    it('increases the balance by the amount given as an argument', () => {
      account.depositMoney(100);

      expect(account.balance).toBe(100);
    });

    it('creates a statement when a deposit is made', () => {
      account.depositMoney(100);

      expect(mockBankStatement.createStatement)
          .toHaveBeenCalledWith('deposit', 100, 100);
      expect(mockTransactionHistory.insertTransaction)
          .toHaveBeenCalled();
    });

    it('throws an error if amount <= 0', () => {
      expect(() => {
        account.depositMoney(-50);
      }).toThrow('Only positive amounts accepted');
    });
  });
  describe('#withdrawMoney(amount)', () => {
    it('decreases the balance by the amount given as an argument', () => {
      account.depositMoney(200);

      account.withdrawMoney(100);

      expect(account.balance).toBe(100);
    });

    it('creates a statement when a withdraw is made', () => {
      account.depositMoney(200);

      account.withdrawMoney(100);

      expect(mockBankStatement.createStatement)
          .toHaveBeenCalledWith('withdraw', 100, 100);
      expect(mockTransactionHistory.insertTransaction)
          .toHaveBeenCalled();
    });

    it('throws an error if trying to withdraw a negative number', () => {
      expect(() => {
        account.withdrawMoney(-20);
      }).toThrow('Only positive amounts accepted');
    });

    it('throws an error if amount bigger than the balance', () => {
      account.depositMoney(50);

      expect(() => {
        account.withdrawMoney(100);
      }).toThrow('Not enough funds');
    });
  });

  describe('#printBankStatements()', () => {
    it('calls printStatments method from BankStatement class', () => {
      account.printBankStatements();

      expect(mockBankStatement.printStatements)
          .toHaveBeenCalledWith(mockTransactionHistory.transactions);
    });
  });
});
