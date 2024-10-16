import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombreUsuario: string = '';  // Variable para almacenar el nombre completo del usuario

  constructor(private menuCtrl: MenuController, private dbService: DatabaseService) { }

  ngOnInit() {
    // Obtener los datos del usuario actual desde el DatabaseService
    const usuarioActual = this.dbService.getItem('usuarioRegistrado');
    if (usuarioActual) {
      // Construir el nombre completo del usuario
      this.nombreUsuario = `${usuarioActual.nombre} ${usuarioActual.apellido}`;
    }
  }

  closeMenu() {
    this.menuCtrl.close(); // Cierra el menú
  }
}
