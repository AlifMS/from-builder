import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-group-model',
  templateUrl: './update-group-model.component.html',
  styleUrls: ['./update-group-model.component.css']
})
export class UpdateGroupModelComponent implements OnInit{

  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['']
  });
  submitted:boolean = false;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateGroupModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    if(this.data){
      this.form.patchValue(this.data);
    }
  }


  closeModal(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.submitted = true
    if (this.form.valid) {
      this.dialogRef.close({event:'save',data:this.form.value});
    }
  }

}
