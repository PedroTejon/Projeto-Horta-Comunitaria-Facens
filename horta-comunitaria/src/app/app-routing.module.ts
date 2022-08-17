import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrosModule } from './cadastros/cadastros.module';
import { ConsumidorComponent } from './cadastros/consumidor/consumidor.component';

const routes: Routes = [
  { path: '', component: ConsumidorComponent },
  {
    path: 'consumidor',
    component: ConsumidorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
