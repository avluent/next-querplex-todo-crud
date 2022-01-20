import { TodoItem } from "../types/interfaces";
import { uuid } from "uuidv4";


export const mockTodos: TodoItem[] = [
    {
        id: uuid(),
        description: "Walk the dog",
        isDone: false
    },
    {
        id: uuid(),
        description: "Clean the house",
        isDone: false
    },
    {
        id: uuid(),
        description: "Code another Todo List",
        isDone: false
    },
    {
        id: uuid(),
        description: "Build a business",
        isDone: false
    },
    {
        id: uuid(),
        description: "Hold a torch",
        isDone: false
    },
]