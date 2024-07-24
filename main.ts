<<<<<<< HEAD
#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
=======
import inquirer from "inquirer";
>>>>>>> 37a220c6f8b0c14e8a5444c96ef82c22f7560262

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
<<<<<<< HEAD
            console.log(chalk.whiteBright(`\n withdrwa of $ ${amount} successful.
           
                Remaining Balance: $${this.balance}`))
                console.log("_".repeat(60));
                
        }
        else {chalk.redBright( "Insufficient Balance.") 
            console.log("_".repeat(60));
            
        }
=======
            console.log(`withdrwa of $ ${amount} successful.
            Remaining Balance: $${this.balance}`)
        }
        else { "Insufficient Balance." }
>>>>>>> 37a220c6f8b0c14e8a5444c96ef82c22f7560262
    }
    // Credit MOny 
    deposit(amount: number): void {
        if (amount > 100) {
            amount -= 1; //$1 fee charged if more than $100 is deposited
        } this.balance += amount;
<<<<<<< HEAD
        console.log(chalk.whiteBright(`Deposit of $${amount} Successful.Reminig Balance: $${this.balance}`));
console.log("_".repeat(60));
=======
        console.log(`Deposit of $${amount} Successful.Reminig Balance: $${this.balance}`);
>>>>>>> 37a220c6f8b0c14e8a5444c96ef82c22f7560262

    }

    // Check Balance 
    checkBalance(): void {
<<<<<<< HEAD
        console.log(chalk.whiteBright(`\nCurrent balance $${this.balance}`));
        console.log("_".repeat(60));
        
=======
        console.log(`Current balance $${this.balance}`);
>>>>>>> 37a220c6f8b0c14e8a5444c96ef82c22f7560262
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
<<<<<<< HEAD
    new Customers ("\n Hamza", "Khan","Male","34",3029292929, account[0]),
    new Customers ("\n Saba", "Khan","female","12",3029342929, account[1]),
    new Customers ("\nfiza", "Khan","female","30",3024492929, account[2])
=======
    new Customers ("Hamza", "Khan","Male","34",3029292929, account[0]),
    new Customers ("Saba", "Khan","female","12",3029342929, account[1]),
    new Customers ("fiza", "Khan","female","30",3024492929, account[2])
>>>>>>> 37a220c6f8b0c14e8a5444c96ef82c22f7560262

]
// function to interact with bank account
async function servise (){
    do{
        const accountNumberInput = await inquirer.prompt({
            name: "accountNumber",
            type: "number",
<<<<<<< HEAD
            message: chalk.yellowBright("\n Enter your account number:  "),
=======
            message: "Enter your account number"
>>>>>>> 37a220c6f8b0c14e8a5444c96ef82c22f7560262
        }
        )
        const customer = customersBank.find(customer => customer.account.accountNumber === accountNumberInput.accountNumber) 
              if(customer){
<<<<<<< HEAD
                console.log(chalk.blueBright(`\n welcome 
                    ${customer.firstName}${customer.lastName}`));
=======
                console.log(`welcome ${customer.firstName}${customer.lastName}`);
>>>>>>> 37a220c6f8b0c14e8a5444c96ef82c22f7560262
                    const ans = await inquirer.prompt(
                        [
                            {
                                name: "select",
                                type: "list",
<<<<<<< HEAD
                                message: "\n Select an operation ",
=======
                                message: "Select an operation ",
>>>>>>> 37a220c6f8b0c14e8a5444c96ef82c22f7560262
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
<<<<<<< HEAD
                                message: chalk.yellowBright("\n Enter the amount to deposite:  ")
=======
                                message: "Enter the amount to deposite"
>>>>>>> 37a220c6f8b0c14e8a5444c96ef82c22f7560262
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
<<<<<<< HEAD
                                message: chalk.whiteBright("\n Enter the amount to withdraw: ")
=======
                                message: "Enter the amount to withdraw: "
>>>>>>> 37a220c6f8b0c14e8a5444c96ef82c22f7560262
                            }
                        ]
                    )
                    customer.account.withdraw(withdrawdAmount.amount )
                    break;
                    case "Check Balance" : 
                    customer.account.checkBalance();
                    break;
                   case "Exit":
                    
<<<<<<< HEAD
                   console.log(chalk.red("\n Exiting bank progrm... "));
                   console.log("\n Thank You for using our bank services. Have a great day")
                   console.log("_".repeat(60));
                   
=======
                   console.log("Exiting bank progrm... ");
                   console.log("\n Thank You for using our bank services. Have a great day")
>>>>>>> 37a220c6f8b0c14e8a5444c96ef82c22f7560262
                   return; 
                }
                
                }
                else {
<<<<<<< HEAD
                    console.log(chalk.redBright("\nInvalid Account Number Please Try again"))
                    console.log("_".repeat(60));
                    
=======
                    console.log("Invalid Account Number Please Try again")
>>>>>>> 37a220c6f8b0c14e8a5444c96ef82c22f7560262
              }

    } while (true)
}
servise()