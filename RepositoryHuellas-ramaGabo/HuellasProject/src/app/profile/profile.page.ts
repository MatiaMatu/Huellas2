import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRestService } from '../services/service-rest.service';
import { ToastController, ToastOptions } from '@ionic/angular';
import { Posteo } from '../clases/posteo';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  username: string ='';
  data: any;
  posteos: any;
  image: any;
  posteo: any ={
    id:null,
    titulo: "",
    fechaperdido: "",
    descripcion: ""
  }
  constructor(private route: ActivatedRoute, private router: Router, private api: ServiceRestService, private toastController: ToastController) { }

  

  limpiar(){
    this.posteo.titulo="";
    this.posteo.fechaperdido="";
    this.posteo.descripcion="";
  }

  ionViewWillEnter(){
    this.getPosteoList()
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

//---- AGREGAR POSTEO
  addPosteo(){
    if (this.posteo.titulo == "" || this.posteo.fechaperdido == "" || this.posteo.descripcion == ""){
      this.presentToast({
        message: ' Error al crear anuncio, debe llenar los campos ',
        duration: 3000,
        position: 'middle',
        icon: 'alert-circle-outline'
      });
      return;
    }else{
      this.api.addPosteo(this.posteo).subscribe({
        next: (() => {
          console.log("Anuncio creado")
          this.presentToast({
            message: 'Posteado!',
            duration: 3000,
            position: 'middle',
            icon: 'alert-circle-outline'
        });
        this.getPosteoList();
        this.limpiar();
    })
  })
    }}



async presentToast(opts?: ToastOptions){
  const toast = await this.toastController.create(opts);
  toast.present();
}

  cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.router.navigate(["/login"]);
  }
  //GET ALL POSTEO
  getPosteoList(){
    this.api.getPosteoList().subscribe((data) =>{
      console.log(data);
      this.posteos=data;
    })
  }


  
}


