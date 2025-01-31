import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonList,
  IonItem,
  IonInput,
  IonLabel,
  IonButton  
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, ReactiveFormsModule,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonList,
    IonItem,
    IonInput,
    IonLabel,
    IonButton, 
  ]
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { 

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(100)]] 
    });
  }

  ngOnInit() {
  }

  iniciarSesion(){
    if (this.loginForm.valid){
      const { email, password } = this.loginForm.value;
      if (email === 'jhon@mail.com' && password === '77@1$') {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', email);
        console.log("se inicio sesion exitosamente");
      }else {
        console.log("credenciales incorrecta");
      }
    }else {
      console.log("Formulario invalido");
    }  
  }

}
