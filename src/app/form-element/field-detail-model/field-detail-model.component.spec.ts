import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDetailModelComponent } from './field-detail-model.component';

describe('FieldDetailModelComponent', () => {
  let component: FieldDetailModelComponent;
  let fixture: ComponentFixture<FieldDetailModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldDetailModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldDetailModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
