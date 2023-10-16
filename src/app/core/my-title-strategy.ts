import {DefaultTitleStrategy, RouterStateSnapshot} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {SharedService} from "../shared/shared.service";
import {Injectable} from "@angular/core";

@Injectable()
export class MyTitleStrategy extends DefaultTitleStrategy {

  constructor(title: Title, private sharedService: SharedService) {
    super(title);
  }

  override updateTitle(snapshot: RouterStateSnapshot) {
    super.updateTitle(snapshot);
    let newTitle = this.title.getTitle();
    console.log(`inside service: ${newTitle}`);
    this.sharedService.pageTitle$.next(newTitle);
  }
}
