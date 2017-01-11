class SavingsAccount {

    private balance:number
    private withdrawlsLeft = 3;

    constructor(initialBalance:number, private ownerName:string) {
        this.balance = initialBalance;
    }

    public deposit(value:number) {
        this.balance += value;
    }

    public withdraw(value:number) {
        if(this.withdrawlsLeft > 0) {
            this.withdrawlsLeft--;
            this.balance -= value;
        } else {
            console.log("I'm sorry, this account is no longer able to withdraw money.")
        }
    }

    public checkBalance() {
        console.log(`The balance for ${this.ownerName}'s checkings account is ${this.balance}.`)
    }
}

var sa = new SavingsAccount(1000, "Evan");
sa.checkBalance();
sa.withdraw(100);
sa.checkBalance();
sa.withdraw(200);
sa.checkBalance();
sa.withdraw(100);
sa.checkBalance();
sa.withdraw(200);
sa.checkBalance();