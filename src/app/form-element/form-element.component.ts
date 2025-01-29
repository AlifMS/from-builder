import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { FieldDetailModelComponent } from './field-detail-model/field-detail-model.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent {

  @Output() updateFilds = new EventEmitter<any>();
  @Output() updateGroupDetails = new EventEmitter<any>();
  @Output() deleteGroupDetails = new EventEmitter<any>();

  selectedGroup:any;
  filterText:any;

  fieldGroups:any[] =[
    {
      group:'Text',
      fields:[
        {label:"Single Line Text",type:"text",description:"Single text area",iconClass:'fa fa-font'},
        {label:"Multi Line Text",type:"textarea",description:"Multi text area",iconClass:'fa fa-align-right'},
        {label:"Integer",type:"number",description:"Integer type area",iconClass:'fa fa-sort-numeric-desc'}
      ]
    },
    {
      group:'Date',
      fields:[
        {label:"Date",type:"date",description:"Select date from datepicker",iconClass:'fa fa-calendar'},
        {label:"Time",type:"time",description:"Select time from timepicker",iconClass:'fa fa-clock-o'},
        {label:"Date & Time",type:"date-time",description:"Select date and time from picker",iconClass:'fa fa-calendar-plus-o'}
      ]
    },
    {
      group:'Multi',
      fields:[
        {label:"Single Selection",type:"radio",description:"Select single option",iconClass:'fa fa-dot-circle-o'},
        {label:"Multi Selection",type:"checkbox",description:"Select multiple options",iconClass:'fa fa-check-square'},
        {label:"Dropdown",type:"select",description:"Select options from dropdown",iconClass:'fa fa-list'}
      ]
    },
    {
      group:'Media',
      fields:[
        {label:"Upload",type:"file",description:"Upload document/media files",iconClass:'fa fa-upload'}
      ]
    },
  ]

  formFields:any[] = [];

  constructor(private cd: ChangeDetectorRef, public dialog: MatDialog){}
  updateSelectGroup(group:any){
    this.selectedGroup = group;
    this.formFields = (group.fields)?group.fields:[];
    this.cd.detectChanges();
  }

  drop(event: CdkDragDrop<any[]>) {
    if(event.previousContainer.id != event.container.id){
      const dialogRef = this.dialog.open(FieldDetailModelComponent,{
        data:{ type:event.item.data.type }
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.formFields.push({ label: result.data.label, description: result.data.description, type:event.item.data.type, options:result.data.options });
          this.updateFilds.emit(this.formFields)
        }
      });
    } else moveItemInArray(this.formFields, event.previousIndex, event.currentIndex);

  }

  updateFieldDetails(fieldDetails:any, index:number){
    this.formFields[index] = fieldDetails;
    this.updateFilds.emit(this.formFields)
  }

  deleteFieldDetails(index:number){
    this.formFields.splice(index,1);
  }

  updateGroup(groupDetails:any){
    this.updateGroupDetails.emit(groupDetails);
  }

  deleteGroup(){
    this.deleteGroupDetails.emit();
  }

  onFilterChange(){

  }
}
