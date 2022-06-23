const TransactionHistory = require('../lib/transactionHistory');

describe('TransactionHistory', () => {
  beforeEach(() => {
    transactionHistory = new TransactionHistory;
  });
  it('transactions array is empty when initialise', () => {
    expect(transactionHistory.transactions)
        .toEqual([]);
  });

  describe('#insertTransanction', () => {
    it('inserts a transaction into the transactions array', () => {
      transactionHistory.insertTransaction('example of transaction');

      expect(transactionHistory.transactions[0])
          .toBe('example of transaction');
    });

    it('transactions are in reverse chronological order', () => {
      transactionHistory.insertTransaction('transaction number 1');
      transactionHistory.insertTransaction('transaction number 2');

      expect(transactionHistory.transactions[0]).toBe('transaction number 2');
      expect(transactionHistory.transactions[1]).toBe('transaction number 1');
    });
  });
});
