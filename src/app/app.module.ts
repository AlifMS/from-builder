import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FieldGroupComponent } from './field-group/field-group.component';
import { FormElementComponent } from './form-element/form-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { GroupHeaderSectionComponent } from './form-element/group-header-section/group-header-section.component';
import { UpdateFieldDetailModelComponent } from './form-element/update-field-detail-model/update-field-detail-model.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldGroupComponent,
    FormElementComponent,
    GroupHeaderSectionComponent,
    UpdateFieldDetailModelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    DragDropModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
