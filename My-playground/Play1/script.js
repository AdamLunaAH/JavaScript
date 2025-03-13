"use strict";
let name1 = "Samantha Smith";
// console.log(name1);
let phonenr = 123456789;
// console.log(phonenr);



let names = document.getElementById("name");
names.innerHTML = `<h2>${name1}</h2>`;

let phonenrs = document.getElementById("phonenr");
phonenrs.innerHTML = `<h2>${phonenr}</h2>`;



let person = { name2: "Samantha Jones", phonenr: "01234567" };

let persons = document.createElement("p");
persons.appendChild(
    document.createTextNode(
        "Name: " + person.name2 + ", Phonenr: " + person.phonenr
    )
);


// document.querySelector("#personas");

let personas = ["Aaa", "Bbb", "Ccc"];
let ulTag = document.getElementById("nameList");

// let liTag = document.createElement("li");

//     ulTag.appendChild(liTag);

// liTag.innerText = personas[0];
// liTag.innerHTML = personas;

// for (let i = 0; i < personas.length; i++) {
//     liTag.innerText = personas[i];
// }

// let ulTag = document.getElementById("nameList");

for (const element of personas) {
    let liTag = document.createElement("li");

    liTag.innerText = element;

    ulTag.appendChild(liTag);
}
