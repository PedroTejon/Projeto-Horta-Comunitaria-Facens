import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuicaoComponent } from './distribuicao.component';

describe('DistribuicaoComponent', () => {
  let component: DistribuicaoComponent;
  let fixture: ComponentFixture<DistribuicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribuicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistribuicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
