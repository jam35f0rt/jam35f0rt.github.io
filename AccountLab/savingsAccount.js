class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }

    getInterest(){
        return this._interest;
    }

    setInterest(interest){
        this._interest = interest;
    }

    addInterest(interest){
        let amount = super.getBalance() * (interest/100);
        console.log(amount)
        super.deposit(amount);
    }

    toString() {
        return super.toString() + ": interest " + this._interest;
    }

    endOfMonth(){
        this.addInterest(this._interest);
        return "Interest added SavingsAccount "+super.getNumber()+": balance: "+super.getBalance()+" interest: "+this._interest;
    }
}