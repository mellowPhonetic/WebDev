console.log("Hi javascript programmers");

// create an account object with a username and password properties
let account = {
    username: "mellowPhonetic",
    password: "password"
};

// output the properties 
console.log("username: " + account.username + "\npassword: " + account.password);

// add a property email to the account object
account.email = "your_email@example.com";

// create an object called personal wjth properties name, address, phone, and customerNumber
let personal = {
    name: "John Doe",
    address: "123 Easy Street",
    phone: "myPhone",
    customerNumber: "custNum"
};

let customer = {
    ...account, 
    ...personal
};

console.log("Customer Object: ", customer);

// write a statement to extract the name and customerNumber from customer
let = { name, customerNumber } = customer;

console.log("Name: ", name);
console.log("Customer Number: ", customerNumber);

let { name: customerName, customerNumber: custNum} = customer;

// user for/in to enumerate the properties in customer
for (let prop in customer) {
    console.log(prop + ": " + customer[prop]);
}