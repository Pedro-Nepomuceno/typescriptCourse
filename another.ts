import axios, { AxiosResponse } from "axios";

const numero: number = 2345;

const ArrowFunction = (x: number, y: number): number => x + y;

const addNumero = ArrowFunction(2, 3);
console.log(addNumero);
2;

interface Todo {
  id: number;
  userId: number;
  completed: boolean;
  title: string;
}

const fectchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Todo: ", response.data);
  } catch (error) {
    console.log(error);
  }
};
