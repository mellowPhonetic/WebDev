const double = function(number) {
    return 2 * number;
}

const triple = function(number) {
    return 3 * number;
}

const square = (number) => number * number;

const increment = (number) => number + 1;

function mapThis(array, callback) {
    let newArray = new Array();
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i]);
    }
    return newArray;

}

function updateEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
}

const numbers = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

console.log(mapThis(numbers, double)); 
console.log(mapThis([1,2,3], double)); 
console.log(mapThis([5,10,5], triple)); 
console.log(mapThis([1,2], square));   

myarray = [2,3,4];
updateEach(myarray, increment);
console.log(myarray); 
updateEach(myarray, square);
console.log(myarray); 

updateEach(numbers,triple);
console.log(numbers); 

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'Sara@gmail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age: 23,
    },
];

let youngPeople = people.filter(person => person.age <= 25);

function getNameEmail(person) {
    let neededInfo = {
        name: "",
        email: ""
    }

    neededInfo.name = person.firstName + " " + person.lastName;
    neededInfo.email = person.email;

    return neededInfo;
}

youngPeople = youngPeople.map(getNameEmail);

console.log(youngPeople);


const nums = [2, -30, 50, 20, -12, -9, 7];  

let positiveSum = nums.reduce((x, y) => {if (y > 0) {return x + y} else {return x}}, 0);

console.log(positiveSum);

