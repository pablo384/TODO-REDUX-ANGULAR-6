import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Cambiar estado todo';
export const EDIT_TODO = '[TODO] Editar todo';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto: string) { }
}
export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) { }
}
export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;
    constructor(public id: number, public texto: string) { }
}

export type Acciones =
    AgregarTodoAction |
    ToggleTodoAction |
    EditTodoAction
    ;

