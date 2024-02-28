// anotations are used to specify a data type of a variable, parameter, function return value and other types of values.
//annotation help developers catch error early in development
//TYPE INFERENCE is a feature in Typescript compiled, it automatically infer the type of variable if we dont explicitly assign to it
function someString(str) {
    console.log("some message here ".concat(str));
}
// The never keyword, can help catch errors on compile time instead of runtime, it
//annotation on function
// in the example below we are just annotating the tyoe of parameter this function can take
function greating(person) {
    console.log("hello ".concat(person));
}
// in the example below we use annotation to tell what kind of data this function is returning
var multiply = function (x, y) { return x * y; };
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
var number = [1, 2, 3, 4];
var names = ["Pedro", "Pedro2"];
var nestedArray = [
    [1, 2, 3],
    [3, 2, 1],
];
// objects in Typescript
var newObject = {
    firstName: "Pedro",
    email: "pedro@pedro.com",
    age: 34,
};
function printPerson(person) {
    console.log("name: ".concat(person.name, ", Age ").concat(person.age));
}
var myPerson = { name: "Pedro", age: 34 };
printPerson(myPerson);
var wheatherCondition;
(function (wheatherCondition) {
    wheatherCondition["Rainy"] = "rainy";
    wheatherCondition["Sunny"] = "sunny";
})(wheatherCondition || (wheatherCondition = {}));
var currentWeather = wheatherCondition.Sunny;
console.log(currentWeather);
// OOP in typescript
var Someone = /** @class */ (function () {
    function Someone(name, age) {
        this.name = name;
        this.age = age;
    }
    return Someone;
}());
var newPerson = new Someone("Pedro", 34);
console.log(newPerson);
// acess modifiers in typescript can be PRIVATE PUBLIC OR PROTECTED
var SomeoneElse = /** @class */ (function () {
    function SomeoneElse(name, age) {
        this.name = name;
        this.age = age;
    }
    SomeoneElse.prototype.getName = function () {
        return this.name;
    };
    SomeoneElse.prototype.getAge = function () {
        return this.age;
    };
    return SomeoneElse;
}());
var add = function (a, b) { return a * b; };
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("car started");
    };
    Car.prototype.stop = function () {
        console.log("cart stopped");
    };
    return Car;
}());
var music = {
    name: "By the way",
    genre: "Rock",
    printSongName: function (name, genre) {
        return "this music is called ".concat(name, " from ").concat(genre);
    },
};
console.log(music.printSongName("By the way", "Rock"));
var pedro = {
    FirstName: "Pedro",
    lastName: "Lima",
    sayhello: function () {
        console.log("Hello");
    },
};
function greet(person) {
    console.log("Hello ".concat(person.FirstName));
    person.sayhello();
}
var myCar = {
    start: function () {
        console.log("car started");
    },
    stop: function () {
        console.log("car stopped");
    },
    year: 2024,
    model: "Toyota",
};
// generics
function uniqueDataTypes(item, defaultValue) {
    return [item, defaultValue];
}
var result = uniqueDataTypes(10, 20);
console.log(result);
function filterArray(array, condition) {
    return array.filter(function (item) { return condition(item); });
}
var numArray = [1, 3, 4, 5, 6, 7, 8];
var evenNumber = filterArray(numArray, function (num) { return num % 2 === 0; });
console.log(evenNumber);
function narrowingType(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
}
var manager = {
    id: 123,
    function: "gerente",
    department: "engeneering",
    role: "manager",
};
