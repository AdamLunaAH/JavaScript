"use strict";

let tablebody = document.querySelector('#tablebody')
let row = document.createElement("div");
row.classList.add("trFluid");

let group2 = document.createElement("div");
group2.classList.add("trFluid_Grouping2");
row.appendChild(group2);


let group1a = document.createElement("div");
group2.classList.add("trFluid_Grouping1");
group2.appendChild(group1a);

let cont1 = document.createElement("div");
cont1.classList.add("tdFluent");
cont1.innerHTML="Frankenstein";
group1a.appendChild(cont1);

let group1b = document.createElement("div");
group2.classList.add("trFluid_Grouping1");
group2.appendChild(group1b);

let cont2 = document.createElement("div");
cont2.classList.add("tdFluent");
cont1.innerHTML = "Frankenstein";
group1b.appendChild(cont2);

let cont3 = document.createElement("div");
cont3.classList.add("tdFluent");
cont1.innerHTML = "Mary-Ann Shelly";
group1b.appendChild(cont3);

let cont4 = document.createElement("div");
cont4.classList.add("tdFluent");
cont1.innerHTML = "1850";
group1b.appendChild(cont4);







tablebody.appendChild(row);



// loop end