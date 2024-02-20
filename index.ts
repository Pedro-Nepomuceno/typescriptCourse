type Person = {
  name: string;
};

const person: Person = {
  name: "John",
};
console.log(person);

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
