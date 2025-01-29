import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateGroupModelComponent } from '../update-group-model/update-group-model.component';

@Component({
  selector: 'app-field-group',
  templateUrl: './field-group.component.html',
  styleUrls: ['./field-group.component.css']
})
export class FieldGroupComponent implements OnInit{

  @Input() groups:any[] = [];

  filteredGroups:any[] = [];
  filterText = '';

  selectedGroup:any;

  @Output() selectGroup:EventEmitter<any> = new EventEmitter<any>();
  @Output() addNewGroup:EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
    this.filteredGroups = [... this.groups]
    this.select(this.groups[0])
  }

  /**
   * Updates the `filteredGroups` array based on the current `filterText`.
   * If `filterText` is not empty, it filters the `groups` array to include only
   * those items whose title includes the `filterText` (case-insensitive).
   * Otherwise, it copies all items from `groups` to `filteredGroups`.
   */
  onFilterChange() {
    console.log(this.groups);
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

  createGroup(){
    const dialogRef = this.dialog.open(UpdateGroupModelComponent,{ data:null });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.addNewGroup.emit(result.data);
        this.onFilterChange();
      }
    });
  }

}
