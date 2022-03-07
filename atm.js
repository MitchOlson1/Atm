"use strict"
const prompt = require('prompt-sync')();
const atm = require('./atm');

function validatePin (Pin){
    Pin = prompt("Enter Pin");
    if (Pin == 1994){
        if(Pin.length == 4);
            return true;
     } else {
         console.log("Incorrect Pin");
         return false
    }
}

function accountBalance (){
    balance = account.balance;
    return balance;
}

function deposit (){
    let deposit = prompt("Enter amount to deposit");
    account.balance = parseInt(deposit) + accountBalance.balance;
    return account.balance;
}


function withdrawal (){
    let userInput = prompt("Type amount to withdraw");
    if (parseInt(amountWithdrawn) <= account.balance){
        account.balance = account.balance = - parseInt(amountWithdrawn);
        console.log("Amount Withdrawn {amountWithdrawn}");
        return true;
    }else if (parseInt(amountWithdrawn) > account.balance){
        console.log("ERROR CHECK FUNDS");
        return false;
    


    }

    }
    




module.exports.accountBalance = accountBalance;
module.exports.withdrawal = withdrawal;
module.exports.validatePin = validatePin;
module.exports.deposit = deposit;