import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-field-group',
  templateUrl: './field-group.component.html',
  styleUrls: ['./field-group.component.css']
})
export class FieldGroupComponent implements OnInit{

  groups = [
    { title:'AMC Reports', description:'test description'},
    { title:'HVAC Repair', description:'test description'},
    { title:'AMC Yearly', description:'test description'},
    { title:'AMC Installations - Tier 3', description:'test description'},
    { title:'Service Request', description:'test description'},
    { title:'Maintenance', description:'test description'},
  ];
  filteredGroups = [...this.groups];
  filterText = '';

  selectedGroup:any;

  @Output() selectGroup:EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.select(this.groups[0])
  }

  onFilterChange() {
    this.filteredGroups = this.filterText
      ? this.groups.filter(item =>
          item.title.toLowerCase().includes(this.filterText.toLowerCase())
        )
      : [...this.groups];
  }

  select(group:any){
    this.selectedGroup = group;
    this.selectGroup.emit(group);
  }
}
