import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public photoService: PhotoService) { }

  //Función que llama a la función asíncrona del servicio
addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
//Función asíncrona para cargar las fotos que están guardadas en el caché
async ngOnInit() { 
  await this.photoService.loadSaved();
}
}
