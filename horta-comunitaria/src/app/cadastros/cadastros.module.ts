import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumidorComponent } from './consumidor/consumidor.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { MatIconModule } from '@angular/material/icon';
import { PlantioComponent } from './plantio/plantio.component';
import { PlantasComponent } from './plantas/plantas.component';
import { IrrigacaoComponent } from './irrigacao/irrigacao.component';
import { ColheitaComponent } from './colheita/colheita.component';
import { DistribuicaoComponent } from './distribuicao/distribuicao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConsumidorComponent,
    ColaboradorComponent,
    PlantioComponent,
    PlantasComponent,
    IrrigacaoComponent,
    ColheitaComponent,
    DistribuicaoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    ConsumidorComponent,
    ColaboradorComponent,
    PlantioComponent,
    PlantasComponent,
    IrrigacaoComponent,
    ColheitaComponent,
    DistribuicaoComponent
  ]
})
export class CadastrosModule { }
