import {DefaultTitleStrategy, RouterStateSnapshot} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Injectable} from "@angular/core";
import {PageService} from "../services/page.service";

@Injectable()
export class MyTitleStrategy extends DefaultTitleStrategy {

  constructor(title: Title, private pageService: PageService) {
    super(title);
  }

  override updateTitle(snapshot: RouterStateSnapshot) {
    super.updateTitle(snapshot);
    let newTitle = this.title.getTitle();
    console.log(`inside service: ${newTitle}`);
    this.pageService.pageTitle$.next(newTitle);
  }
}
