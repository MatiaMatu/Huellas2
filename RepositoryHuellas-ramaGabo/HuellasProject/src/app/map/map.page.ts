import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';





declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {


  posteo: any ={};
  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  markers: any = [
    {
      title: "Perdido: Gata Siamesa",
      latitude: "-33.03267026215162",
      longitude: "-71.53343819623208",
      desc: "llamada Luna, se perdió el 15 de agosto en el vecindario del Parque. Luna es de color crema...",
      fexa: "Visto por última vez: 15/08/23",
      icon: {
        url: '/assets/imgs/gato3.jpg', 
        scaledSize: new google.maps.Size(45, 45) 
      }
    },
    {
      title: this.posteo.titulo,
      latitude: this.posteo.latitude,
      longitude: this.posteo.longitude,
      desc: this.posteo.desc,
      fexa: this.posteo.fexa
    },
    {
      title: "Se Busca a Max, Nuestro Perro Labrador Dorado",
      latitude: "-33.034990320903994",
      longitude: "-71.53285448550722",
      desc: "Max, nuestro amado labrador dorado, desapareció el 10 de septiembre cerca del parque...",
      fexa: "Visto por última vez: 10/09/23",
      icon: {
        url: '/assets/imgs/perro2.jpg', 
        scaledSize: new google.maps.Size(45, 45) 
      }
    },
    {
      title: "Desapareció Nuestra Tortuga Ninja en el Barrio Verde",
      latitude: "-33.03387617602695",
      longitude: "-71.53496522532421",
      desc: "Nuestra querida tortuga, a quien llamamos Leonardo, desapareció misteriosamente de su terrario en el barrio...",
      fexa: "Visto por última vez: 25/07/23",
      icon: {
        url: '/assets/imgs/tortuga2.jpg', 
        scaledSize: new google.maps.Size(45, 45) 
      }
    },
    { 
      title: "Buscamos a Panchito, Nuestro Canario Amarillo",
      latitude: "-33.03591955149153",
      longitude: "-71.53467536286492",
      desc: "Es pequeño, de color amarillo brillante, y canta hermosamente. Si lo ves o escuchas su canto...",
      fexa: "Visto por última vez: 05/06/23",
      icon: {
        url: '/assets/imgs/canario3.jpg', 
        scaledSize: new google.maps.Size(45, 45) 
      }
    }
    
  ];

  constructor(private router: Router) { }



  ionViewDidEnter(){
    
    console.log('ionViewDidEnter called');
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude,marker.longitude);

      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude,
        desc: marker.desc,
        fexa: marker.fexa,
        icon: marker.icon
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' + 
                              '<h2 id="firstHeading" class "firstHeading">' + marker.title + '</h2>' +
                              '<p>' + marker.desc + '</p>' +
                              '<p>' + marker.fexa + '</p>' +
                              '<div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  async showMap() {
    const coordinates = await Geolocation.getCurrentPosition();
    const location = new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: false
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

  ngOnInit() {

  }


}
