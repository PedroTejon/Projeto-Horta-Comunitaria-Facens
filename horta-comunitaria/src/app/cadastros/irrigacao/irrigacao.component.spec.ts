import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigacaoComponent } from './irrigacao.component';

describe('IrrigacaoComponent', () => {
  let component: IrrigacaoComponent;
  let fixture: ComponentFixture<IrrigacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrrigacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrrigacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
