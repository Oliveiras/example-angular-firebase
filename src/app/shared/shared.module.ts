import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {TitlebarComponent} from "../core/components/titlebar/titlebar.component";


@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
  ]
})
export class SharedModule { }
