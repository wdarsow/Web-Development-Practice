const person = {
    name: "Wade", 
    age: 21,
    city: "LA"
};

// bracket notation
console.log(person["name"], person["city"]);

// dot notation
console.log(person.name);

// update city
person.city = "Irvine";
console.log(person);

// make new empty object
let animal = {}
animal.name = "Rusty";
animal.age = 12;
animal.breed = "Bulldog";

console.log(animal);