import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDeTarefasComponent } from './consulta-de-tarefas.component';

describe('ConsultaDeTarefasComponent', () => {
  let component: ConsultaDeTarefasComponent;
  let fixture: ComponentFixture<ConsultaDeTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaDeTarefasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDeTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
