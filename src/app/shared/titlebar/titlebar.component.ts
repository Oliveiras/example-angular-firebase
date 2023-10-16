import {ChangeDetectorRef, Component} from '@angular/core';
import {Observable} from "rxjs";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent {

  pageTitle$: Observable<string>;

  constructor(private sharedService: SharedService, private cdr:ChangeDetectorRef) {
    this.pageTitle$ = this.sharedService.pageTitle$;
  }

}
