import inquirer from "inquirer";
// bank account class
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber,
            this.balance = balance;
    }
    //  Debit Mony 
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`withdrwa of $ ${amount} successful.
            Remaining Balance: $${this.balance}`);
        }
        else {
            "Insufficient Balance.";
        }
    }
    // Credit MOny 
    deposit(amount) {
        if (amount > 100) {
            amount -= 1; //$1 fee charged if more than $100 is deposited
        }
        this.balance += amount;
        console.log(`Deposit of $${amount} Successful.Reminig Balance: $${this.balance}`);
    }
    // Check Balance 
    checkBalance() {
        console.log(`Current balance $${this.balance}`);
    }
}
// Customer Class
class Customers {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    account;
    constructor(firstName, lastName, gender, age, mobileNumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
}
// Creat Bank Account 
const account = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1000),
    new BankAccount(1003, 2000)
];
const customersBank = [
    new Customers("Hamza", "Khan", "Male", "34", 3029292929, account[0]),
    new Customers("Saba", "Khan", "female", "12", 3029342929, account[1]),
    new Customers("fiza", "Khan", "female", "30", 3024492929, account[2])
];
// function to interact with bank account
async function servise() {
    do {
        const accountNumberInput = await inquirer.prompt({
            name: "accountNumber",
            type: "number",
            message: "Enter your account number"
        });
        const customer = customersBank.find(customer => customer.account.accountNumber === accountNumberInput.accountNumber);
        if (customer) {
            console.log(`welcome ${customer.firstName}
                    ${customer.lastName}`);
            const ans = await inquirer.prompt([
                {
                    name: "select",
                    type: "list",
                    message: "Select an operation ",
                    choices: ["Deposit", "Withdraw", "Check Balance", "Exit"]
                }
            ]);
            switch (ans.select) {
            }
        }
    } while (true);
}
