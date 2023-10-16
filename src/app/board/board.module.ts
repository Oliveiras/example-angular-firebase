import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardListComponent } from './board-list/board-list.component';
import {CardModule} from "../card/card.module";


@NgModule({
  declarations: [
    BoardListComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    CardModule
  ]
})
export class BoardModule { }
