import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecificnoticePageRoutingModule } from './specificnotice-routing.module';

import { SpecificnoticePage } from './specificnotice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecificnoticePageRoutingModule
  ],
  declarations: [SpecificnoticePage]
})
export class SpecificnoticePageModule {}
