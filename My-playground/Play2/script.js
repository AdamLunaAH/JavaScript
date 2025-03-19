let person = {fn: "martin", ph: "123456"};

// let persons = [person, person, person];

let persons = [{...person}, {...person}, {...person}];


persons[0].ph = "7989101112";

console.log(persons[0]);
console.log(persons[2]);
console.log(persons[2]);

