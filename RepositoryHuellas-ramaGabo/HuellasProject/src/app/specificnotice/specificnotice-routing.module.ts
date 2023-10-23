import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecificnoticePage } from './specificnotice.page';

const routes: Routes = [
  {
    path: '',
    component: SpecificnoticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecificnoticePageRoutingModule {}
