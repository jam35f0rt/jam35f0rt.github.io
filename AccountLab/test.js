function tester() {
    let account1 = new Account(37729);
    let account2 = new Account(393829);
    account1.deposit(50);
    account2.deposit(50);
    account2.withdraw(10);
  
    let savingsAccount1 = new SavingsAccount(614243, 10);
    savingsAccount1.deposit(100);
    let savingsAccount2 = new SavingsAccount(838330, 15);
    savingsAccount2.deposit(500);
    savingsAccount2.addInterest(20);
  
    let checkingAccount1 = new CheckingAccount(614243, 200);
    let checkingAccount2 = new CheckingAccount(93843, 250);
    checkingAccount2.deposit(100);
  
    let accounts = [
      savingsAccount1,
      savingsAccount2,
      checkingAccount1,
      checkingAccount2,
    ];
    let bank1 = new Bank(accounts);
    bank1.addSavingsAccount(12);
    bank1.addCheckingAccount(350);
  
    let savingsAccount3 = new SavingsAccount(839292, 10);
    savingsAccount3.deposit(100);
    let checkingAccount3 = new CheckingAccount(7483883, 200);
    let otherAccounts = [savingsAccount3, checkingAccount3];
    let bank2 = new Bank(otherAccounts);
  
    bank2.getAccounts().forEach((element) => {
      console.log(element.endOfMonth());
    });
  
    describe("account class methods test", () => {
      it("Current account balance should be 50 after a deposit of 50 is made on account1", () => {
        assert.equal(account1.getBalance(), 50);
      });
      it("Current account balance should be 40 after a withdrawal of 10 is made on account2", () => {
        assert.equal(account2.getBalance(), 40);
      });
      it("Current account balance for savings account1 should be 100 after a deposit of 100 is made ", () => {
        assert.equal(savingsAccount1.getBalance(), 100);
      });
      it("Current account balance for savings account2 should be 600 after an addInterest(20%) is made ", () => {
        assert.equal(savingsAccount2.getBalance(), 600);
      });
      it("Current interest rate for savings account1 should 10%", () => {
        assert.equal(savingsAccount1.getInterest(), 10);
      });
      it("Should return 200 as the overdraft of checking account1", () => {
        assert.equal(checkingAccount1.getOverdraft(), 200);
      });
      it("Should return 100 as the balance of checking account2 after a deposit of 100 was made", () => {
        assert.equal(checkingAccount2.getBalance(), 100);
      });
  
      it("Should return 1 as the account number after a savings account with 12 interest is added", () => {
        assert.equal(bank1.getAccounts()[4].getNumber(), 1);
      });
      it("Should return 350 as the overdraft of the checking account added to the bank1 accounts", () => {
        assert.equal(bank1.getAccounts()[5].getOverdraft(), 350);
      });
      it("Should return 2 as the account number after of the checking account added to the bank1 accounts", () => {
        assert.equal(bank1.getAccounts()[5].getNumber(), 2);
      });
    });
    mocha.run();
  }
  
  window.onload = function () {
    tester();
  };