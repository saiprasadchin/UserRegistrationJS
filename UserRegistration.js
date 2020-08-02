console.log("Welcome to UserRegistration");

const prompt = require('prompt-sync')();

let namePattern = new RegExp("^[A-Z]{1}[A-Za-z]{2}");
let emailPattern = new RegExp("^[a-zA-Z0-9.+_-]+[@][a-zA-Z0-9]+[.]co(m|.in)$");
let phonePattern = new RegExp("^[0-9][0-9] [6-9][0-9]{9}$");

function checkFormat(input, inputFormat){
    return inputFormat.test(input);
}

function getFirstName(){
    let firstName = prompt("Enter First Name: ");
    if(!checkFormat(firstName, namePattern)){
        console.log("Enter Valid First Name");
        getFirstName();
    }
}

function getLastName(){
    let lastName = prompt("Enter Last Name: ");
    if(!checkFormat(lastName, namePattern)){
        console.log("Enter Valid Last Name");
        getLastName();
    }
}

function getEmail(){
    let email = prompt("Enter Email: ");
    if(!checkFormat(email, emailPattern)){
        console.log("Enter Valid Email");
        getEmail();
    }
}

function readPhoneNumber(){
    let phoneNumber = prompt("Enter PhoneNumber: ");
    if(!checkFormat(phoneNumber, phonePattern)){
        console.log("Enter Valid Email");
        readPhoneNumber();
    }
}

getFirstName();
getLastName();
getEmail();
readPhoneNumber();
