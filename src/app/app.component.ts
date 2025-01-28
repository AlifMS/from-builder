import { Component, ViewChild } from '@angular/core';
import { FormElementComponent } from './form-element/form-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(FormElementComponent) formElement!:FormElementComponent

  selectGroup(group:any){
    setTimeout(()=>{
      this.formElement.updateSelectGroup(group);
    },50);
  }
}
