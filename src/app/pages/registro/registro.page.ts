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
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonList,
    IonItem,
    IonInput,
    IonLabel,
    IonButton,
    CommonModule, 
    ReactiveFormsModule
  ]
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private storageService: StorageService) {
    
    this.registroForm = this.fb.group({
      fecha: ['', [Validators.required]],
      paciente: ['', [Validators.required, Validators.maxLength(150)]], 
      doctor: ['', [Validators.required, Validators.maxLength(150)]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
      malestar: ['', [Validators.required, Validators.maxLength(1024)]], 
    });
  }

  ngOnInit() {
  }

  agregarRegistro(){
    if(this.registroForm.valid){
      const datos = this.registroForm.value;
      this.storageService.guardarRegistro(datos);
      this.router.navigateByUrl('/listado');
    }else{
      console.log("Formulario no valido");
    }
  }

}
