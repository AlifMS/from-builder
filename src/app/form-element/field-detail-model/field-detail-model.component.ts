import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-field-detail-model',
  templateUrl: './field-detail-model.component.html',
  styleUrls: ['./field-detail-model.component.css']
})
export class FieldDetailModelComponent implements OnInit{

  form: FormGroup = this.fb.group({
    label: ['', Validators.required],
    description: [''],
    placeholder:[''],
    type: ['', Validators.required],
    options: this.fb.array([]) // FormArray for dynamic options
  });
  showOptionsSection = false; // Controls visibility of the options section

  submitted:boolean = false;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<FieldDetailModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    if (this.data) {
      this.form.controls['type'].setValue(this.data.type)
      this.showOptionsSection = ['select', 'radio', 'checkbox'].includes(this.data.type);
      if(this.data.currentValues){
        this.form.controls['label'].setValue(this.data.currentValues.label);
        this.form.controls['description'].setValue(this.data.currentValues.description);
        if(this.data.currentValues.options.length > 0){
          this.data.currentValues.options.forEach((ele:any) =>{
            this.addOption(ele);
          })
        } else {
          this.options.clear();
        }
      }
      if(!this.data.currentValues){
        if (!this.showOptionsSection) {
          this.options.clear(); // Clear options if the type doesn't require them
        } else this.addOption();
      }
    }
  }

  // Getter for the options FormArray
  get options(): FormArray {
    return this.form.get('options') as FormArray;
  }

  // Add a new option to the FormArray
  addOption(data?:any): void {
    const optionGroup = this.fb.group({
      label: [(data)?data.label:'', Validators.required],
      value: [(data)?data.value:'', Validators.required]
    });
    this.options.push(optionGroup);
  }

  // Remove an option from the FormArray
  removeOption(index: number): void {
    this.options.removeAt(index);
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
