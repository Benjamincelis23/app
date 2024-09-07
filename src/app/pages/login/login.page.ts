import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUsuario: string = "";
  loginContrasena: string = "";

  constructor() { }

  ngOnInit() {
  }

  ValidarCredenciales() { 
    console.log(this.loginUsuario);
    console.log(this.loginContrasena);
  }
}
