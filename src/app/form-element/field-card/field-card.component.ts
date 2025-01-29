import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FieldDetailModelComponent } from '../field-detail-model/field-detail-model.component';

@Component({
  selector: 'app-field-card',
  templateUrl: './field-card.component.html',
  styleUrls: ['./field-card.component.css']
})
export class FieldCardComponent {
  @Output() updateFieldDetails = new EventEmitter<any>();
  @Output() deleteFieldDetails = new EventEmitter<any>();
  @Input() field:any;

  constructor(public dialog: MatDialog){}

  edit(){
    const dialogRef = this.dialog.open(FieldDetailModelComponent,{
      data:{
        type:this.field.type,
        currentValues:this.field
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log(result);
        this.updateFieldDetails.emit({ label: result.data.label, description: result.data.description, type:this.field.type, options:result.data.options })
      }
    });
  }

  delete(){
    this.deleteFieldDetails.emit();
  }
}
