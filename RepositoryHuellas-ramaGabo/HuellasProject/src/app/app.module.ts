import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceRestService } from './services/service-rest.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,ReactiveFormsModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule,CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ServiceRestService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule {}
