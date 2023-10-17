import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardListComponent } from './pages/board-list/board-list.component';
import {CardModule} from "../card/card.module";
import { BoadDetailComponent } from './pages/boad-detail/boad-detail.component';


@NgModule({
  declarations: [
    BoardListComponent,
    BoadDetailComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    CardModule
  ]
})
export class BoardModule { }
