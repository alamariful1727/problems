interface Todo {
  title: string;
  description: string;
  status: boolean;
}

//? Partial
const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) =>{
  return { ...todo, ...fieldsToUpdate };
}

const todo1 :Todo = {title: "1", description: "1", status: false};
const todo2 = updateTodo(todo1, {status: true});

//? Promise & Awaited
type A = Awaited<Promise<string>>;
// type A = string

type B = Awaited<Promise<Promise<number>>>;    
// type B = number

type C = Awaited<boolean | Promise<number>>;
// type C = number | boolean

//? Record
type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British" },
};