import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavController } from '@ionic/angular';  // Importa el controlador de navegación
=======
>>>>>>> 598b112de26ab0e3e4f5129745c0bd4cc6682c1b

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUsuario: string = "";
  loginContrasena: string = "";

<<<<<<< HEAD
  constructor(private navCtrl: NavController) { }
=======
  constructor() { }
>>>>>>> 598b112de26ab0e3e4f5129745c0bd4cc6682c1b

  ngOnInit() {
  }

  ValidarCredenciales() { 
    console.log(this.loginUsuario);
    console.log(this.loginContrasena);
  }
<<<<<<< HEAD

  // Nueva función para navegar a la página de registro
  navigateToRegister() {
    this.navCtrl.navigateForward('/registro');
  }
=======
>>>>>>> 598b112de26ab0e3e4f5129745c0bd4cc6682c1b
}
