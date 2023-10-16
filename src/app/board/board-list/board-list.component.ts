import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Card} from "../../card/models/card";

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent {

  todoList$: Observable<Card[]>;

  constructor() {
    this.todoList$ = of([
      { id: '1', title: 'um', description: 'one' },
      { id: '2', title: 'dois', description: 'two' }
    ]);
  }

}
