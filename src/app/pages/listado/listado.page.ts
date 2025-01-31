import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonThumbnail, 
  IonSearchbar, 
  IonItemGroup,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonThumbnail, 
    IonSearchbar, 
    IonItemGroup,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton,
    RouterLink
  ]
})
export class ListadoPage implements OnInit {

  datosRegistro: any[] = [];

  constructor(private storageService: StorageService) {
    
    addIcons({ add });
  }

  ngOnInit() {
    this.listarDatos();
  }

  listarDatos(){
    this.datosRegistro = this.storageService.listarRegistros();

    this.datosRegistro.sort(function (a, b){
      return a.paciente - b.paciente;
    });
  }

}
