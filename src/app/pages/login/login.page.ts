import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
=======
import { NavController } from '@ionic/angular';  // Importa el controlador de navegación
>>>>>>> 921f1a61ed3b6398c0876b97587b8418676c0c10

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
<<<<<<< HEAD
  loginUsuario: string = "";
  loginContrasena: string = "";
  mensajeError: string = "";

  constructor(private navCtrl: NavController, private dbService: DatabaseService) {}

  ngOnInit() {}

  async ValidarCredenciales() {
    const usuario = await this.dbService.validateUser(this.loginUsuario, this.loginContrasena);

    if (usuario) {  
      localStorage.setItem('usuarioActual', JSON.stringify({
        nombre: usuario.nombre,
        apellido: usuario.apellido
      }));
      this.navCtrl.navigateForward('/inicio');
    } else {
=======

  loginUsuario: string = "";  // Correo electrónico del usuario
  loginContrasena: string = "";
  mensajeError: string = "";  // Variable para mostrar un mensaje de error

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  ValidarCredenciales() {
    // Obtener los datos del usuario registrado en localStorage
    const usuarioRegistrado = JSON.parse(localStorage.getItem('usuarioRegistrado') || '{}');

    // Verificar si los datos ingresados coinciden con los datos almacenados
    if (this.loginUsuario === usuarioRegistrado.email && this.loginContrasena === usuarioRegistrado.password) {
      // Guardar el nombre completo del usuario actual en localStorage
      localStorage.setItem('usuarioActual', JSON.stringify({
        nombre: usuarioRegistrado.nombre,
        apellido: usuarioRegistrado.apellido
      }));

      // Redirigir al usuario a la página de "inicio"
      this.navCtrl.navigateForward('/inicio');
    } else {
      // Si las credenciales no coinciden, mostrar mensaje de error
>>>>>>> 921f1a61ed3b6398c0876b97587b8418676c0c10
      this.mensajeError = 'Usuario o contraseña incorrectos';
    }
  }

<<<<<<< HEAD
=======
  // Método que redirige a la página de registro
>>>>>>> 921f1a61ed3b6398c0876b97587b8418676c0c10
  navigateToRegister() {
    this.navCtrl.navigateForward('/registro');
  }
}
