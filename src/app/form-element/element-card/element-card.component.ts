import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element-card',
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.css']
})
export class ElementCardComponent {
  @Input() field:any;
}
