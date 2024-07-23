#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

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
            console.log(chalk.whiteBright(`\n withdrwa of $ ${amount} successful.
           
                Remaining Balance: $${this.balance}`))
                console.log("_".repeat(60));
                
        }
        else {chalk.redBright( "Insufficient Balance.") 
            console.log("_".repeat(60));
            
        }
    }
    // Credit MOny 
    deposit(amount: number): void {
        if (amount > 100) {
            amount -= 1; //$1 fee charged if more than $100 is deposited
        } this.balance += amount;
        console.log(chalk.whiteBright(`Deposit of $${amount} Successful.Reminig Balance: $${this.balance}`));
console.log("_".repeat(60));

    }

    // Check Balance 
    checkBalance(): void {
        console.log(chalk.whiteBright(`\nCurrent balance $${this.balance}`));
        console.log("_".repeat(60));
        
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
    new Customers ("\n Hamza", "Khan","Male","34",3029292929, account[0]),
    new Customers ("\n Saba", "Khan","female","12",3029342929, account[1]),
    new Customers ("\nfiza", "Khan","female","30",3024492929, account[2])

]
// function to interact with bank account
async function servise (){
    do{
        const accountNumberInput = await inquirer.prompt({
            name: "accountNumber",
            type: "number",
            message: chalk.yellowBright("\n Enter your account number:  "),
        }
        )
        const customer = customersBank.find(customer => customer.account.accountNumber === accountNumberInput.accountNumber) 
              if(customer){
                console.log(chalk.blueBright(`\n welcome 
                    ${customer.firstName}${customer.lastName}`));
                    const ans = await inquirer.prompt(
                        [
                            {
                                name: "select",
                                type: "list",
                                message: "\n Select an operation ",
                                choices: ["Deposit", "Withdraw", "Check Balance" , "Exit"]
                            }
                        ]
                    )
                switch (ans.select)
                { case "Deposit" : 
                    const depositedAmount = await inquirer.prompt(
                        [
                            {
                                name: "amount",
                                type: "number",
                                message: chalk.yellowBright("\n Enter the amount to deposite:  ")
                            }
                        ]
                    )
                    customer.account.deposit(depositedAmount.amount )
                    break;
                    case "Withdraw" : 
                    const withdrawdAmount = await inquirer.prompt(
                        [
                            {
                                name: "amount",
                                type: "number",
                                message: chalk.whiteBright("\n Enter the amount to withdraw: ")
                            }
                        ]
                    )
                    customer.account.withdraw(withdrawdAmount.amount )
                    break;
                    case "Check Balance" : 
                    customer.account.checkBalance();
                    break;
                   case "Exit":
                    
                   console.log(chalk.red("\n Exiting bank progrm... "));
                   console.log("\n Thank You for using our bank services. Have a great day")
                   console.log("_".repeat(60));
                   
                   return; 
                }
                
                }
                else {
                    console.log(chalk.redBright("\nInvalid Account Number Please Try again"))
                    console.log("_".repeat(60));
                    
              }

    } while (true)
}
servise()