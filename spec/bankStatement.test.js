const BankStatement = require('../lib/bankStatement');

describe('BankStatements', () => {
  beforeEach(() => {
    bankStatements = new BankStatement();
  });

  describe('#createStatement(reason, amount, balance)', () => {
    it('"deposit", adds a credit transaction with amount and balance', () => {
      const date = new Date();
      const dateFormatted = date.toLocaleDateString();

      expect(bankStatements.createStatement('deposit', 2000, 2000))
          .toEqual(`${dateFormatted} || 2000.00 || || 2000.00`);
    });

    it('"withdraw", adds a debit transaction with amount and balance', () => {
      const date = new Date();
      const dateFormatted = date.toLocaleDateString();

      expect(bankStatements.createStatement('withdraw', 500, 1500))
          .toEqual(`${dateFormatted} || || 500.00 || 1500.00`);
    });

    it('throws an error when reason is not one accepted', () => {
      expect(() => {
        bankStatements.createStatement('whatever', 1000, 2000);
      }).toThrow('Reason for statement not recognised');
    });
  });

  describe('#printStatements()', () => {
    beforeEach(() => {
      console.log = jest.fn();
      date = new Date();
      dateFormatted = date.toLocaleDateString();
    });

    it('prints titles and a balance of 0 when no statements given', () => {
      bankStatements.printStatements([]);

      expect(console.log.mock.calls[0][0])
          .toBe('date || credit || debit || balance');
      expect(console.log.mock.calls[1][0])
          .toBe(`${dateFormatted} || || || 0.00`);
    });

    it('prints title and transactions, when some statements given', () => {
      bankStatements.createStatement('deposit', 2000, 2000);
      bankStatements.createStatement('withdraw', 500, 1500);
      bankStatements.createStatement('deposit', 750, 2250);

      bankStatements.printStatements([
        'example of statement',
        'example of statement 2',
      ]);

      expect(console.log.mock.calls[0][0])
          .toBe('date || credit || debit || balance');
      expect(console.log.mock.calls[1][0])
          .toBe('example of statement');
      expect(console.log.mock.calls[2][0])
          .toBe('example of statement 2');
    });
  });
});
