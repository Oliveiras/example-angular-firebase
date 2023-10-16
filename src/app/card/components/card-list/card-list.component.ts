import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Card} from "../../models/card";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input() title = '';
  @Input() items$!: Observable<Card[]>;

  onDrop($event: CdkDragDrop<Card[], any>) {

  }
}
