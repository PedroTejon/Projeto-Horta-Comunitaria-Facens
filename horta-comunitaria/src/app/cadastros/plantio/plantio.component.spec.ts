import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantioComponent } from './plantio.component';

describe('PlantioComponent', () => {
  let component: PlantioComponent;
  let fixture: ComponentFixture<PlantioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
