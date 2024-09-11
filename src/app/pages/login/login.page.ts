import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importa el controlador de navegación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
      this.mensajeError = 'Usuario o contraseña incorrectos';
    }
  }

  // Método que redirige a la página de registro
  navigateToRegister() {
    this.navCtrl.navigateForward('/registro');
  }
}
