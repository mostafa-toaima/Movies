import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrl: './start-rating.component.scss'
})
export class StartRatingComponent {
  @Input() rating :any;
  @Input() isReadOnly: boolean = false;
}
