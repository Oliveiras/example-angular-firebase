import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardSummaryComponent } from './components/card-summary/card-summary.component';
import {MatCardModule} from "@angular/material/card";
import { CardListComponent } from './components/card-list/card-list.component';
import {CdkDropList} from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [
    CardSummaryComponent,
    CardListComponent
  ],
  exports: [
    CardSummaryComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatCardModule,
    CdkDropList
  ]
})
export class CardModule { }
