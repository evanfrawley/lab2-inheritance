class Account {
    public balance:number;
    constructor(initialBalance:number, private ownerName:string) {
        this.balance = initialBalance;
    }

    public withdraw(value:number) {
        this.balance -= value;
    }
    public deposit(value:number) {
        this.balance += value;
    }

    public checkBalance() {
        console.log(`The balance for ${this.ownerName}'s account is ${this.balance}.`)
    }
}

class CheckingsAccount extends Account {

    constructor(initBalance:number, ownerName:string) {
        super(initBalance, ownerName);
    }
}

class SavingsAccount extends Account {

    private withdrawlsLeft = 3;

    constructor(initBalance:number, ownerName:string) {
        super(initBalance, ownerName);
    }

    public withdraw(value:number) {
        if(this.withdrawlsLeft > 0) {
            this.withdrawlsLeft--;
            this.balance -= value;
        } else {
            console.log("I'm sorry, this account is no longer able to withdraw money.")
        }
    }
}

var ca = new CheckingsAccount(100, "Evan");
ca.checkBalance();
ca.deposit(100);
ca.checkBalance();
ca.withdraw(200);
ca.checkBalance();

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