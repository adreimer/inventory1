import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlantRefComponent } from './add-plant.component';

describe('AddPlantRefComponent', () => {
  let component: AddPlantRefComponent;
  let fixture: ComponentFixture<AddPlantRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlantRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlantRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
