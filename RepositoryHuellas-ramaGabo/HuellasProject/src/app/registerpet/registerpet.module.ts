import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterpetPageRoutingModule } from './registerpet-routing.module';

import { RegisterpetPage } from './registerpet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterpetPageRoutingModule
  ],
  declarations: [RegisterpetPage]
})
export class RegisterpetPageModule {}
