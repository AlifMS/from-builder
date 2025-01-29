import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGroupModelComponent } from './update-group-model.component';

describe('UpdateGroupModelComponent', () => {
  let component: UpdateGroupModelComponent;
  let fixture: ComponentFixture<UpdateGroupModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGroupModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGroupModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
