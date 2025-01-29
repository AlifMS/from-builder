import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FieldGroupComponent } from './field-group/field-group.component';
import { FormElementComponent } from './form-element/form-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms'
import { GroupHeaderSectionComponent } from './form-element/group-header-section/group-header-section.component';
import { FieldDetailModelComponent } from './form-element/field-detail-model/field-detail-model.component';
import { FieldCardComponent } from './form-element/field-card/field-card.component';
import { ElementCardComponent } from './form-element/element-card/element-card.component';
import { UpdateGroupModelComponent } from './update-group-model/update-group-model.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldGroupComponent,
    FormElementComponent,
    GroupHeaderSectionComponent,
    FieldDetailModelComponent,
    FieldCardComponent,
    ElementCardComponent,
    UpdateGroupModelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
