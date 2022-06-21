const BankStatements = require('./bankStatements');

describe('BankStatements', () => {
  beforeEach(() => {
    bankStatements = new BankStatements;
  });

  it('By creation, the statements attibrute has only the titles', () => {
    expect(bankStatements.statements)
        .toEqual(['date || credit || debit || balance']);
  });

  describe('#createStatement(reason, amount)', () => {
    it('"deposit", adds a credit transaction with amount and balance', () => {
      bankStatements.createStatement('deposit', 1000, 2000);
      const date = new Date();
      const dateFormatted = date.toLocaleDateString();

      expect(bankStatements.statements[1])
          .toEqual(`${dateFormatted} || 1000.00 || || 2000.00`);
    });

    it('"withdraw", adds a debit transaction with amount and balance', () => {
      bankStatements.createStatement('withdraw', 500, 1500);
      const date = new Date();
      const dateFormatted = date.toLocaleDateString();

      expect(bankStatements.statements[1])
          .toEqual(`${dateFormatted} || || 500.00 || 1500.00`);
    });

    it('throws an error when reason is not one accepted', () => {
      expect(() => {
        bankStatements.createStatement('whatever', 1000, 2000);
      }).toThrow('Reason for statement not recognised');
    });
  });
});
