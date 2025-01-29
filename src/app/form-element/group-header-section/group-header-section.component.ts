import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateGroupModelComponent } from 'src/app/update-group-model/update-group-model.component';

@Component({
  selector: 'app-group-header-section',
  templateUrl: './group-header-section.component.html',
  styleUrls: ['./group-header-section.component.css']
})
export class GroupHeaderSectionComponent {
  @Input() title: string = '';
  @Input() description: string = '';

  @Output() updateGroup = new EventEmitter<any>()
  @Output() deleteGroup = new EventEmitter<any>()

  constructor(public dialog: MatDialog){}

  edit(){
    const dialogRef = this.dialog.open(UpdateGroupModelComponent,{ data:{ title:this.title, description:this.description }})
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.updateGroup.emit(result.data);
      }
    });
  }

  delete(){
    this.deleteGroup.emit();
  }

}
