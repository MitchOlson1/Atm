"use script"

function userMenu(){
    console.log("Press 1 for Balance; Press 2 for Withdrawal; Press 3 for Deposit; Press 4 for Exit")
    let userInput = prompt();
    switch(userInput){
        case "1":
            atm.accountBalance();
            let bal = atm.accountBalance();
            console.log(`Balace = $${bal}.00`);
            userInput = "";
            userMenu();
            break;
        case "2":
            atm.Withdrawal();
            userInput = "";
            userMenu();
            break;
        case "3":
            let Deposit = atm.Deposit();
            if (Deposit === false){
                atmMenu();
                break;
            };
            console.log(`Balance = $${Deposit}.00`);
            userInput = "";
            atmMenu();
            break;
        case "4":
            console.log("Session Ended");
            break;
        default:
            atmMenu();
    }
}
