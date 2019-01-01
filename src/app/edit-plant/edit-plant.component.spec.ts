import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlantRefComponent } from './edit-plant.component';

describe('EditPlantRefComponent', () => {
  let component: EditPlantRefComponent;
  let fixture: ComponentFixture<EditPlantRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlantRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlantRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
