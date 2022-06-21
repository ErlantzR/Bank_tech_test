const BankStatements = require('./bankStatements');

describe('BankStatements', () => {
  beforeEach(() => {
    bankStatements = new BankStatements;
  });

  it('By creation, the statements attibrute has only the titles', () => {
    expect(bankStatements.statements)
        .toEqual(['date || credit || debit || balance']);
  });
});
