import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {

  formularioRecover: FormGroup;

  constructor(public fb: FormBuilder) { 

    this.formularioRecover = this.fb.group({
      'nombre': new FormControl ("",Validators.required),
      'password': new FormControl ("",Validators.required),
    })

  }

  ngOnInit() {
  }

}

