import { Component, ViewChild } from '@angular/core';
import { FormElementComponent } from './form-element/form-element.component';
import { FieldGroupComponent } from './field-group/field-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(FormElementComponent) formElement!:FormElementComponent;
  @ViewChild(FieldGroupComponent) fieldGroup!:FieldGroupComponent;

  groups = [
    {
      title:'AMC Reports',
      description:'test description'
    },
    { title:'HVAC Repair', description:'test description'},
    { title:'AMC Yearly', description:'test description'},
    { title:'AMC Installations - Tier 3', description:'test description'},
    { title:'Service Request', description:'test description'},
    { title:'Maintenance', description:'test description'},
  ];

  selectedGroup:any;

  constructor(){}

  selectGroup(group:any){
    setTimeout(()=>{
      this.groups.forEach((element:any) => {
        if(element.title == group.title){
          this.formElement.updateSelectGroup(element);
          this.selectedGroup = element;
        }
      });
    },50);
  }

  updatedata(fields:any){
    this.groups.forEach((element:any) => {
      if(element.title == this.selectedGroup.title){
        element.fields = fields;
      }
    })
  }

  addNewGroup(group:any){
    console.log(group);
    this.groups.push(group);
  }

  updateGroupDetails(group:any){
    const index = this.groups.findIndex(ele => ele.title == this.selectedGroup.title);
    this.groups[index].title = group.title;
    this.groups[index].description = group.description;
  }

  deleteGroupDetails(){
    const index = this.groups.findIndex(ele => ele.title == this.selectedGroup.title);
    this.groups.splice(index, 1);
    this.fieldGroup.onFilterChange();
    this.selectGroup(this.groups[0]);
  }
}
