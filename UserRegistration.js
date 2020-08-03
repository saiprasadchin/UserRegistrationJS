console.log("Welcome to UserRegistration");

const prompt = require('prompt-sync')();

const namePattern = new RegExp("^[A-Z]{1}[A-Za-z]{2}");
const emailPattern = new RegExp("^[a-zA-Z0-9.+_-]+[@][a-zA-Z0-9]+[.]co(m|.in)$");
const phonePattern = new RegExp("^[0-9][0-9] [6-9][0-9]{9}$");
const passwordPattern = new RegExp("(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&!]){1}.{8,}");

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

function readPassword(){
    let password = prompt("Enter Password: ");
    if(!checkFormat(password, passwordPattern)){
        console.log("Enter Valid Password");
        readPassword();
    }
}

getFirstName();
getLastName();
getEmail();
readPhoneNumber();
readPassword();
