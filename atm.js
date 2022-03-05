"use strict"

function validatePin (Pin){
    Pin = prompt("Enter Pin");
    if (Pin == 1234){
        if(Pin.length == 4);
            return true;
     } else {
         console.log("Incorrect Pin");
         return false
    }
}

function accountBalance (balance){
    balance = account.balance;
    return balance;
}

function deposit (){
    let deposit = prompt("Enter amount to deposit");
    account.balance = parseInt(deposit) + accountBalance.balance;
    return account.balance;
}


function withdrawal (withdrawal){
    let userInput = prompt("Type amount to withdraw");

}


