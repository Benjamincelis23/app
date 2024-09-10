import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  constructor(private menuCtrl: MenuController) { }

  closeMenu() {
    this.menuCtrl.close(); // Cierra el menú
  }
}
