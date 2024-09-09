import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  rut: string = '';
  telefono: string = '';
  email: string = '';
  password: string = '';
  loading: HTMLIonLoadingElement | undefined;

  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController) { }

  ngOnInit() { }

  async crearCuenta() {
    if (!this.nombre || !this.apellido || !this.rut || !this.telefono || !this.email || !this.password) {
      return; // No hacer nada si hay campos vacíos
    }

    this.loading = await this.loadingCtrl.create({
      message: 'Creando cuenta...',
      duration: 2000
    });
    await this.loading.present();

    // Simular un retraso para la carga
    setTimeout(() => {
      // Aquí puedes agregar lógica para enviar datos al servidor y manejar la respuesta

      this.loading?.dismiss(); // Ocultar indicador de carga

      // Redirigir al usuario a la página de inicio de sesión
      this.navCtrl.navigateBack('/login');
    }, 2000);
  }
}
