class CheckingAccount extends Account{
    constructor(number, overdraft){
        super(number);
        this._overdraft = overdraft;
    }

    getOverdraft(){
        return this._overdraft;
    }

    setOverdraft(overdraft){
        this._overdraft = overdraft;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw "Withdraw amount has to be greater than zero";
        }
        if(this.getBalance() - amount > this._overdraft){
            throw "You cannot withdraw beyond your overdraft limit";
        }
        this._balance -= amount;
    }


    toString() {
        return this.toString() + ": overdraft limit " + this._overdraft;
    }

    endOfMonth(){
        if(this.getBalance() < 0){
            return "Warning low balance SavingsAccount "+super.getNumber()+": balance: "+super.getBalance()+" overdraft: "+this._overdraft;
        }
    }
}