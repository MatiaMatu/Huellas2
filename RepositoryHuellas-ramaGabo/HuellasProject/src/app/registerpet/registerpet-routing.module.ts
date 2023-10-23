import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterpetPage } from './registerpet.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterpetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterpetPageRoutingModule {}
