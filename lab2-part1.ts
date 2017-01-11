class CheckingsAccount {

    private balance:number;

    constructor(initialBalance:number, private ownerName:string) {
        this.balance = initialBalance;
    }

    public deposit(value:number) {
        this.balance += value;
    }

    public withdraw(value:number) {
        this.balance -= value;
    }

    public checkBalance() {
        console.log(`The balance for ${this.ownerName}'s checkings account is ${this.balance}.`)
    }
}

var ca = new CheckingsAccount(100, "Evan");
ca.checkBalance();
ca.deposit(100);
ca.checkBalance();
ca.withdraw(200);
ca.checkBalance();