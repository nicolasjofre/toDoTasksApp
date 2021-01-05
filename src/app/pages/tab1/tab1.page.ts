import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { type } from 'os';
import { TodotasksService } from '../../services/todotasks.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private service: TodotasksService, private router: Router, private alert: AlertController) {

  }

  async addToList() {

    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler:() => {

          }
        },
        {
          text: 'Crear',
          handler:(data) => {
            if (data.title.length === 0) {
              return
            }

            const listId = this.service.createList(data.title);
            
            this.router.navigateByUrl(`/tabs/pending/add/${ listId }`);
          }
        }
      ]
    });

    alert.present();
    //this.router.navigateByUrl('tabs/pending/add');
  }

}
