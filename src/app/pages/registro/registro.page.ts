import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavController, LoadingController, ToastController } from '@ionic/angular';
=======
import { NavController, LoadingController } from '@ionic/angular';
>>>>>>> 921f1a61ed3b6398c0876b97587b8418676c0c10
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

<<<<<<< HEAD
  constructor(
    private navCtrl: NavController, 
    private loadingCtrl: LoadingController, 
    private dbService: DatabaseService,
    private toastCtrl: ToastController 
  ) {}

  ngOnInit() {}

  async crearCuenta() {
    if (!this.nombre || !this.apellido || !this.rut || !this.telefono || !this.email || !this.password) {
      this.showToast('Por favor, completa todos los campos.');
      return;
    }

    this.loading = await this.loadingCtrl.create({
      message: 'Creando cuenta...',
    });
    await this.loading.present();

    const usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      rut: this.rut,
      telefono: this.telefono,
      email: this.email,
      password: this.password
    };

    try {
      await this.dbService.addUser(usuario);
      this.showToast(`Has sido registrado, tu usuario es: ${this.email}, contraseña: ${this.password}`);
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
      this.showToast('Error al crear la cuenta. Intenta nuevamente.');
    } finally {
      this.loading?.dismiss();
    }

    this.navCtrl.navigateBack('/login');
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
=======
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
>>>>>>> 921f1a61ed3b6398c0876b97587b8418676c0c10
  }
}
