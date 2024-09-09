import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  correoElectronico: string = '';
  correoConfirmacion: string = '';
  mensajeErrorCorreo: string = '';
  mensajeErrorConfirmacion: string = '';

  constructor() { }

  ngOnInit() { }

  validarCorreo() {
    if (!this.correoElectronico) {
      this.mensajeErrorCorreo = 'Ingrese un correo electrónico';
    } else if (!this.correoElectronico.includes('@')) {
      this.mensajeErrorCorreo = 'El correo electrónico debe contener un "@"';
    } else {
      this.mensajeErrorCorreo = '';
    }
  }

  validarConfirmacion() {
    if (this.correoConfirmacion !== this.correoElectronico) {
      this.mensajeErrorConfirmacion = 'Los correos electrónicos no coinciden';
    } else {
      this.mensajeErrorConfirmacion = '';
    }
  }

  enviarEnlace() {
    this.validarCorreo();
    this.validarConfirmacion();
    
    if (!this.mensajeErrorCorreo && !this.mensajeErrorConfirmacion) {
      console.log('Enviando enlace de recuperación a: ', this.correoElectronico);
      // Aquí puedes agregar la lógica para enviar el enlace de recuperación
    }
  }
}
