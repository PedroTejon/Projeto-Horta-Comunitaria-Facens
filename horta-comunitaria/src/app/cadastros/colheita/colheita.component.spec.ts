import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColheitaComponent } from './colheita.component';

describe('ColheitaComponent', () => {
  let component: ColheitaComponent;
  let fixture: ComponentFixture<ColheitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColheitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColheitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
