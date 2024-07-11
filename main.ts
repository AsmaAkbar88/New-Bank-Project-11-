import inquirer from "inquirer";

// Bank account interface

interface BankAccount {
    accountNumber: number;
    balance: number;
    withdraw(amount: number): void
    deposit(amount: number): void
    checkBalance(): void

}
// bank account class

class BankAccount implements BankAccount {
    accountNumber: number;
    balance: number;

    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber,
            this.balance = balance
    }
    //  Debit Mony 

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`withdrwa of $ ${amount} successful.
            Remaining Balance: $${this.balance}`)
        }
        else { "Insufficient Balance." }
    }
    // Credit MOny 
    deposit(amount: number): void {
        if (amount > 100) {
            amount -= 1; //$1 fee charged if more than $100 is deposited
        } this.balance += amount;
        console.log(`Deposit of $${amount} Successful.Reminig Balance: $${this.balance}`);

    }

    // Check Balance 
    checkBalance(): void {
        console.log(`Current balance $${this.balance}`);
    }

}
// Customer Class
class Customers {
    firstName: string;
    lastName: string;
    gender: string;
    age: string;
    mobileNumber: Number;
    account: BankAccount;

    constructor(firstName: string, lastName: string, gender: string,
        age: string, mobileNumber: Number, account: BankAccount) {
this.firstName = firstName;
this.lastName = lastName;
this.gender = gender;
this.age = age;
this.mobileNumber = mobileNumber;
this.account = account;
    }
}
// Creat Bank Account 
const account: BankAccount[] = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1000),
    new BankAccount(1003, 2000)
];
const customersBank: Customers[] = [
    new Customers ("Hamza", "Khan","Male","34",3029292929, account[0]),
    new Customers ("Saba", "Khan","female","12",3029342929, account[1]),
    new Customers ("fiza", "Khan","female","30",3024492929, account[2])

]
// function to interact with bank account
async function servise (){
    do{
        const accountNumberInput = await inquirer.prompt({
            name: "accountNumber",
            type: "number",
            message: "Enter your account number"
        }
        )
        const customer = customersBank.find(customer => customer.account.accountNumber === accountNumberInput.accountNumber) 
              if(customer){
                console.log(`welcome ${customer.firstName}
                    ${customer.lastName}`);
                    const ans = await inquirer.prompt(
                        [
                            {
                                name: "select",
                                type: "list",
                                message: "Select an operation ",
                                choices: ["Deposit", "Withdraw", "Check Balance" , "Exit"]
                            }
                        ]
                    )
                switch (ans.select){
                   
                }
              }

    } while (true)
}
