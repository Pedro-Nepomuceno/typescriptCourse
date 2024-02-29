"use strict";
// anotations are used to specify a data type of a variable, parameter, function return value and other types of values.
//annotation help developers catch error early in development
//TYPE INFERENCE is a feature in Typescript compiled, it automatically infer the type of variable if we dont explicitly assign to it
function someString(str) {
    console.log(`some message here ${str}`);
}
// The never keyword, can help catch errors on compile time instead of runtime, it
//annotation on function
// in the example below we are just annotating the tyoe of parameter this function can take
function greating(person) {
    console.log(`hello ${person}`);
}
// in the example below we use annotation to tell what kind of data this function is returning
const multiply = (x, y) => x * y;
// when I function doesnt return anything we need to use the keyword VOID,
function noReturn(x) {
    console.log(x);
}
// the keyword never indicate that some code path should never be reached, it help catching error at compile time instead of runtime
// we gonna use never for functions that 1 - throws errors 2 - a function that has infinite loop 3 - a variable that can never have a value
// for example middleware function that throws error on express.js
function throwError(msg) {
    throw new Error(msg);
}
// creating array in typescript
const number = [1, 2, 3, 4];
const names = ["Pedro", "Pedro2"];
const nestedArray = [
    [1, 2, 3],
    [3, 2, 1],
];
// objects in Typescript
const newObject = {
    firstName: "Pedro",
    email: "pedro@pedro.com",
    age: 34,
};
function printPerson(person) {
    console.log(`name: ${person.name}, Age ${person.age}`);
}
const myPerson = { name: "Pedro", age: 34 };
printPerson(myPerson);
var wheatherCondition;
(function (wheatherCondition) {
    wheatherCondition["Rainy"] = "rainy";
    wheatherCondition["Sunny"] = "sunny";
})(wheatherCondition || (wheatherCondition = {}));
const currentWeather = wheatherCondition.Sunny;
console.log(currentWeather);
// OOP in typescript
class Someone {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const newPerson = new Someone("Pedro", 34);
console.log(newPerson);
// acess modifiers in typescript can be PRIVATE PUBLIC OR PROTECTED
class SomeoneElse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const add = (a, b) => a * b;
class Car {
    start() {
        console.log("car started");
    }
    stop() {
        console.log("cart stopped");
    }
}
const music = {
    name: "By the way",
    genre: "Rock",
    printSongName(name, genre) {
        return `this music is called ${name} from ${genre}`;
    },
};
console.log(music.printSongName("By the way", "Rock"));
const pedro = {
    FirstName: "Pedro",
    lastName: "Lima",
    sayhello() {
        console.log(`Hello`);
    },
};
function greet(person) {
    console.log(`Hello ${person.FirstName}`);
    person.sayhello();
}
const myCar = {
    start() {
        console.log("car started");
    },
    stop() {
        console.log("car stopped");
    },
    year: 2024,
    model: "Toyota",
};
// generics
function uniqueDataTypes(item, defaultValue) {
    return [item, defaultValue];
}
const result = uniqueDataTypes(10, 20);
console.log(result);
function filterArray(array, condition) {
    return array.filter((item) => condition(item));
}
const numArray = [1, 3, 4, 5, 6, 7, 8];
const evenNumber = filterArray(numArray, (num) => num % 2 === 0);
console.log(evenNumber);
function narrowingType(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
}
const manager = {
    id: 123,
    function: "gerente",
    department: "engeneering",
    role: "manager",
};
