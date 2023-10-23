import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; //librerias importadas para crear formulario, controlar y validar registros
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {





  //variable con formato de formGroup
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController, private router: Router) { 
      this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'email': new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }



}