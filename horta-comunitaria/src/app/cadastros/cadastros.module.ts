import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumidorComponent } from './consumidor/consumidor.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ConsumidorComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ConsumidorComponent
  ]
})
export class CadastrosModule { }
