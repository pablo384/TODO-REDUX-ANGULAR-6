import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Cambiar estado todo';
export const TOGGLE_ALL_TODO = '[TODO] Cambiar estado a todas todo';
export const EDIT_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const BORRAR_COMPLETADOS = '[TODO] Borrar COMPLETADOS';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto: string) { }
}
export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) { }
}
export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;
    constructor(public completado: boolean) { }
}
export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;
    constructor(public id: number, public texto: string) { }
}
export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;
    constructor(public id: number) { }
}
export class BorrarCompletadoTodoAction implements Action {
    readonly type = BORRAR_COMPLETADOS;
}

export type Acciones =
    AgregarTodoAction |
    ToggleTodoAction |
    ToggleAllTodoAction |
    EditTodoAction |
    BorrarTodoAction |
    BorrarCompletadoTodoAction
    ;

