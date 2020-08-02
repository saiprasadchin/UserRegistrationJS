console.log("Welcome to UserRegistration");

const prompt = require('prompt-sync')();


let nameFormat = new RegExp("^[A-Z]{1}[A-Za-z]{2}");

function checkFormat(name){
    return nameFormat.test(name);
}

function getFirstName(){
    let firstName = prompt("Enter First Name: ");
    if(!checkFormat(firstName)){
        console.log("Enter Valid First Name");
        getFirstName();
    }
    return;
}

function getLastName(){
    let lastName = prompt("Enter Last Name: ");
    if(!checkFormat(lastName)){
        console.log("Enter Valid Last Name");
        getLastName();
    }
    return
}

getFirstName();
getLastName();
