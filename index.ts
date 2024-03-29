// anotations are used to specify a data type of a variable, parameter, function return value and other types of values.
//annotation help developers catch error early in development

//TYPE INFERENCE is a feature in Typescript compiled, it automatically infer the type of variable if we dont explicitly assign to it

function someString(str: string): void {
  console.log(`some message here ${str}`);
}

// The never keyword, can help catch errors on compile time instead of runtime, it

//annotation on function

// in the example below we are just annotating the tyoe of parameter this function can take
function greating(person: string) {
  console.log(`hello ${person}`);
}
// in the example below we use annotation to tell what kind of data this function is returning

const multiply = (x: number, y: number): number => x * y;

// when I function doesnt return anything we need to use the keyword VOID,

function noReturn(x: string): void {
  console.log(x);
}

// the keyword never indicate that some code path should never be reached, it help catching error at compile time instead of runtime
// we gonna use never for functions that 1 - throws errors 2 - a function that has infinite loop 3 - a variable that can never have a value
// for example middleware function that throws error on express.js

function throwError(msg: string): never {
  throw new Error(msg);
}

// creating array in typescript

const number: number[] = [1, 2, 3, 4];

const names: Array<string> = ["Pedro", "Pedro2"];

const nestedArray: number[][] = [
  [1, 2, 3],
  [3, 2, 1],
];

// objects in Typescript

const newObject: { firstName: string; email: string; age: number } = {
  firstName: "Pedro",
  email: "pedro@pedro.com",
  age: 34,
};

// type Alias

type Person = {
  name: string;
  age: number;
};

function printPerson(person: Person) {
  console.log(`name: ${person.name}, Age ${person.age}`);
}
const myPerson: Person = { name: "Pedro", age: 34 };
printPerson(myPerson);

enum wheatherCondition {
  Rainy = "rainy",
  Sunny = "sunny",
}

const currentWeather = wheatherCondition.Sunny;
console.log(currentWeather);

// OOP in typescript

class Someone {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const newPerson = new Someone("Pedro", 34);
console.log(newPerson);

// acess modifiers in typescript can be PRIVATE PUBLIC OR PROTECTED

class SomeoneElse {
  public name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public getName(): string {
    return this.name;
  }
  private getAge(): number {
    return this.age;
  }
}

// interface is a powerful tool to enforce a structure in your code
// interfaces can also describe the shape of functions and classes

interface animal {
  name: string;
  specie: string;
  age: number;
}
interface mathOperation {
  (x: number, y: number): number;
}
const add: mathOperation = (a, b) => a * b;

//interface can also be used with classes

interface Vehicle {
  start(): void;
  stop(): void;
}
class Car implements Vehicle {
  start(): void {
    console.log("car started");
  }
  stop() {
    console.log("cart stopped");
  }
}
interface Song {
  name: string;
  genre: string;
  printSongName(name: string, genre: string): string;
}

const music: Song = {
  name: "By the way",
  genre: "Rock",
  printSongName(name, genre) {
    return `this music is called ${name} from ${genre}`;
  },
};
console.log(music.printSongName("By the way", "Rock"));

interface Pessoa {
  FirstName: string;
  lastName: string;
  sayhello(): void;
}

const pedro: Pessoa = {
  FirstName: "Pedro",
  lastName: "Lima",
  sayhello() {
    console.log(`Hello`);
  },
};
function greet(person: Pessoa) {
  console.log(`Hello ${person.FirstName}`);
  person.sayhello();
}
// declaration merging allow to increase the functionalities and properties of an existing interface
interface Car {
  model: string;
  start(): void;
}
interface Car {
  stop(): void;
  year: number;
}
const myCar: Car = {
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
function uniqueDataTypes<Type>(item: Type, defaultValue: Type): [Type, Type] {
  return [item, defaultValue];
}
const result = uniqueDataTypes<number>(10, 20);
console.log(result);

function filterArray<type>(
  array: type[],
  condition: (item: type) => boolean
): type[] {
  return array.filter((item) => condition(item));
}

const numArray = [1, 3, 4, 5, 6, 7, 8];
const evenNumber = filterArray<number>(numArray, (num) => num % 2 === 0);
console.log(evenNumber);

// type narrowing

type myType = string | number;

function narrowingType(value: myType): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

type employee = {
  id: number;
  function: string;
};
type Manager = {
  department: string;
  role: string;
};

type employeeInfo = employee & Manager;

const manager: employeeInfo = {
  id: 123,
  function: "gerente",
  department: "engeneering",
  role: "manager",
};
