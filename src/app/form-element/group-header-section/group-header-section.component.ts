import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-header-section',
  templateUrl: './group-header-section.component.html',
  styleUrls: ['./group-header-section.component.css']
})
export class GroupHeaderSectionComponent {
  @Input() title: string = '';
  @Input() description: string = '';



  edit(){}

  copy(){}

  delete(){}

}
