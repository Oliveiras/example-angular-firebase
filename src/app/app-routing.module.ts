import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardModule} from "./board/board.module";
import {BoardRoutingModule} from "./board/board-routing.module";

const routes: Routes = [
  {
    path: 'boards',
    title: 'My Boards',
    loadChildren: () => import('./board/board.module').then(m => m.BoardModule)
  },
  {
    path: '',
    redirectTo: 'boards',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
