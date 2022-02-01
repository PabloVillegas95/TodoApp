
import './styles.css';
import {Todo, TodoList} from './classes'; // Por defecto importa el index.js
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml (todo) );
todoList.todos.forEach(crearTodoHtml);

console.log('todos', todoList.todos);