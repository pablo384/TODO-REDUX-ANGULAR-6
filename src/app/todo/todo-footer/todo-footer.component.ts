import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { BorrarCompletadoTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(
      state => {
        this.filtroActual = state.filtro;
        this.contarPendientes(state.todos);
      }
    );
  }
  cambiarFIltro(filtro: fromFiltro.filtrosValidos) {
    console.log(filtro);
    this.store.dispatch(new fromFiltro.SetFiltroAction(filtro));
  }
  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }
  limpiarCompletados() {
    this.store.dispatch(new BorrarCompletadoTodoAction());
  }

}
