import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFieldDetailModelComponent } from './update-field-detail-model.component';

describe('UpdateFieldDetailModelComponent', () => {
  let component: UpdateFieldDetailModelComponent;
  let fixture: ComponentFixture<UpdateFieldDetailModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFieldDetailModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFieldDetailModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
