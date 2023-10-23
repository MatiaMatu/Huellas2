import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';


register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/notices', icon: 'home' },
    { title: 'Crear Anuncio', url: '/profile', icon: 'heart' },
    { title: 'Mapa', url: '/map', icon: 'map' }
  
  ];
  constructor(private router:Router) {}
  cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.router.navigate(["/login"]);
  }

  
  
}
