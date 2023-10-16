import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitlebarComponent} from './titlebar/titlebar.component';
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    TitlebarComponent
  ],
  exports: [
    TitlebarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
  ]
})
export class SharedModule { }
