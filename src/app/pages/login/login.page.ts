import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importa el controlador de navegación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUsuario: string = "";
  loginContrasena: string = "";

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  ValidarCredenciales() { 
    console.log(this.loginUsuario);
    console.log(this.loginContrasena);
  }

  // Nueva función para navegar a la página de registro
  navigateToRegister() {
    this.navCtrl.navigateForward('/registro');
  }
}
