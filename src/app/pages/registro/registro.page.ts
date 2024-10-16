import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

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

  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController, private dbService: DatabaseService) { }

  ngOnInit() { }

  async crearCuenta() {
    // Validar que todos los campos estén llenos
    if (!this.nombre || !this.apellido || !this.rut || !this.telefono || !this.email || !this.password) {
      return; // No hacer nada si hay campos vacíos
    }

    // Mostrar indicador de carga
    this.loading = await this.loadingCtrl.create({
      message: 'Creando cuenta...',
      duration: 2000
    });
    await this.loading.present();

    // Simular un retraso para la carga
    setTimeout(() => {
      // Guardar los datos del usuario en DatabaseService
      const usuario = {
        nombre: this.nombre,
        apellido: this.apellido,  // Incluyendo el apellido en los datos del usuario
        rut: this.rut,
        telefono: this.telefono,
        email: this.email, // Correo electrónico como nombre de usuario
        password: this.password
      };

      this.dbService.setItem('usuarioRegistrado', usuario);

      this.loading?.dismiss(); // Ocultar indicador de carga

      // Redirigir al usuario a la página de inicio de sesión
      this.navCtrl.navigateBack('/login');
    }, 2000);
  }
}
