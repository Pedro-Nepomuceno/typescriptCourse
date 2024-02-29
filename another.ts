import axios, { AxiosResponse } from "axios";

const numero: number = 2345;

const ArrowFunction = (x: number, y: number): number => x + y;

const addNumero = ArrowFunction(2, 3);
console.log(addNumero);
2;

interface Todo {}

const fectchData = async () => {
  try {
    const response = AxiosResponse<Todo>;
  } catch (error) {
    console.log(error);
  }
};
