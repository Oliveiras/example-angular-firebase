import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Card} from "../../models/card";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input() title = '';
  @Input() items$!: Observable<Card[]>;

  onDrop(event: CdkDragDrop<Card[], any>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
}
