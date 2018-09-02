import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';
const todo1 = new Todo('hacerpresentacion OS');
const todo2 = new Todo('hacer tarea calculo');
const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones) {
    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];
        default:
            return state;
    }
}

