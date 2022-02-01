import { Todo } from ".";

export class TodoList {

    constructor(){
        this.cargarLocalStorage();
    }

    nuevoTodo ( todo ){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo( id ){
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado( id ){

        for( const todo of this.todos ){
            if(todo.id == id){ // == porque uno es string y otro entero
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos) );
    }

    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo')) 
                            ? (JSON.parse(localStorage.getItem('todo'))) 
                            : [];

        //this.todos = this.todos.map(obj => Todo.fromJson(obj)); // Map barre cada uno de los alementos del arrego y retorna un arreglo con cada uno de esos objetos mutados.
        this.todos = this.todos.map(Todo.fromJson); 
    }
    
}