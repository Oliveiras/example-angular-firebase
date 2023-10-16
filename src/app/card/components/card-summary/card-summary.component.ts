import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.css']
})
export class CardSummaryComponent {

  @Input() title = '';
  @Input() description = '';

}
