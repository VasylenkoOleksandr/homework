let name = prompt('Please, enter your first name');
// console.log(name);

let old = prompt(`Hallo, ${name}, nice to meet you. Please enter your birth year:`);

let currentYear = new Date().getFullYear();

let deltaY = currentYear - old;
console.log(currentYear)

alert(deltaY + ' year(s)');