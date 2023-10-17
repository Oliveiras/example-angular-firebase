import {ChangeDetectorRef, Component} from "@angular/core";
import {Observable} from "rxjs";
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent {

  pageTitle$: Observable<string>;

  constructor(private pageService: PageService, private cdr: ChangeDetectorRef) {
    this.pageTitle$ = this.pageService.pageTitle$;
  }

}
