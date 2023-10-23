import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoingresadoGuard } from './noingresado.guard';
import { IngresadoGuard } from './ingresado.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoingresadoGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),
    canActivate:[NoingresadoGuard]
  },
  {
    path: 'notices',
    loadChildren: () => import('./notices/notices.module').then( m => m.NoticesPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate:[IngresadoGuard]
    
  },
  {
    path: 'pet',
    loadChildren: () => import('./pet/pet.module').then( m => m.PetPageModule)
  },
  {
    path: 'registerpet',
    loadChildren: () => import('./registerpet/registerpet.module').then( m => m.RegisterpetPageModule)
  },
  {
    path: 'chatlist',
    loadChildren: () => import('./chatlist/chatlist.module').then( m => m.ChatlistPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'specificnotice',
    loadChildren: () => import('./specificnotice/specificnotice.module').then( m => m.SpecificnoticePageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
  { path: '**', component: NotfoundComponent },
 

];

@NgModule({
  declarations: [NotfoundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {} 
export class NotfoundModule { }
