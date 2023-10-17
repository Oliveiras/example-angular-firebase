import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  pageTitle$ = new BehaviorSubject('My Kanban');

}
