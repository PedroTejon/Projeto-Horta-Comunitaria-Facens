import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrosModule } from './cadastros/cadastros.module';
import { ConsumidorComponent } from './cadastros/consumidor/consumidor.component';
import { ColaboradorComponent } from './cadastros/colaborador/colaborador.component';
import { PlantioComponent } from './cadastros/plantio/plantio.component';
import { PlantasComponent } from './cadastros/plantas/plantas.component';
import { IrrigacaoComponent } from './cadastros/irrigacao/irrigacao.component';
import { ColheitaComponent } from './cadastros/colheita/colheita.component';
import { DistribuicaoComponent } from './cadastros/distribuicao/distribuicao.component';

const routes: Routes = [
  { path: '',
    component: ConsumidorComponent },
  {
    path: 'consumidores',
    component: ConsumidorComponent,
  },
  {
    path: 'colaboradores',
    component: ColaboradorComponent,
  },
  {
    path: 'plantios',
    component: PlantioComponent,
  },
  {
    path: 'plantas',
    component: PlantasComponent,
  },
  {
    path: 'irrigacoes',
    component: IrrigacaoComponent,
  },
  {
    path: 'colheitas',
    component: ColheitaComponent,
  },
  {
    path: 'distribuicoes',
    component: DistribuicaoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
