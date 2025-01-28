import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateFieldDetailModelComponent } from './update-field-detail-model/update-field-detail-model.component';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent {

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
        {label:"Date & Time",type:"datetime",description:"Select date and time from picker",iconClass:'fa fa-calendar-plus-o'}
      ]
    },
    {
      group:'Multi',
      fields:[
        {label:"Single Selection",type:"radio",description:"Select single option",iconClass:'fa fa-dot-circle-o'},
        {label:"Multi Selection",type:"checkox",description:"Select multiple options",iconClass:'fa fa-check-square'},
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


  
  constructor(private cd: ChangeDetectorRef, private dialog: MatDialog){}

  updateSelectGroup(group:any){
    this.selectedGroup = group;
    this.cd.detectChanges();
  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(event);
    console.log(event.item.data)

    let dialogRef = this.dialog.open(UpdateFieldDetailModelComponent, {
      width: '640px',
      disableClose: true,
      data: {dataType:event.item.data.type}
    });
  }


  onFilterChange(){

  }
}
