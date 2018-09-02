import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { AgregarTodoAction } from '../todo.actions';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo() {
    console.log(this.txtInput.value);
    console.log(this.txtInput.valid);
    if (this.txtInput.invalid) {
      return ;
    }
    this.store.dispatch(new AgregarTodoAction(this.txtInput.value));
  }

}
