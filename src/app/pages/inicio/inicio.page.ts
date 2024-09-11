import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombreUsuario: string = '';  // Variable para almacenar el nombre completo del usuario

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
    // Obtener los datos del usuario actual desde localStorage
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioRegistrado') || '{}');
    // Construir el nombre completo del usuario
    this.nombreUsuario = `${usuarioActual.nombre} ${usuarioActual.apellido}`;
  }

  closeMenu() {
    this.menuCtrl.close(); // Cierra el menú
  }
}
