import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, Form} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    usuario: '',
    password: '',
  };


  formularioLogin: FormGroup;



  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController,
    private router: Router) { this.formularioLogin = this.fb.group({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
   }
 
   ngOnInit() {}

  async login() {

    localStorage.setItem('ingresado', 'true');

    let NavigationExtras: NavigationExtras = {
      state: {
        user: this.user,
      }
    };

    this.router.navigate(['/notices'], NavigationExtras);
  }
}
