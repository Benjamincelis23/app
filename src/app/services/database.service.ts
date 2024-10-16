import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements CanActivate {

  constructor(private router: Router) {}

  // Métodos de almacenamiento
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  // Guard para proteger rutas
  canActivate(): boolean {
    const usuarioRegistrado = this.getItem('usuarioRegistrado');
    if (usuarioRegistrado) {
      return true;  // El usuario está autenticado
    } else {
      this.router.navigate(['/login']);  // Redirigir al login si no está autenticado
      return false;
    }
  }
}
