import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-field-detail-model',
  templateUrl: './update-field-detail-model.component.html',
  styleUrls: ['./update-field-detail-model.component.css']
})
export class UpdateFieldDetailModelComponent {

  fieldDetailForm:FormGroup = new FormGroup({
    label: new FormControl('',[Validators.required]),
    description: new FormControl(''),
    dataType: new FormControl(''),
    // options:new FormGroup({}),
  })

  constructor( public dialogRef: MatDialogRef<UpdateFieldDetailModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
  }

  submitForm(form:any){}
}
