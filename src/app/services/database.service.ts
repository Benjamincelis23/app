import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
<<<<<<< HEAD
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
=======
>>>>>>> 921f1a61ed3b6398c0876b97587b8418676c0c10

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements CanActivate {
<<<<<<< HEAD
  private dbInstance: SQLiteObject | undefined;

  constructor(private router: Router, private sqlite: SQLite) {
    this.init();
  }

  // Inicializar la base de datos SQLite
  async init() {
    try {
      this.dbInstance = await this.sqlite.create({
        name: 'usuarios.db',
        location: 'default'
      });
      await this.createTable();
    } catch (error) {
      console.error('Error al inicializar la base de datos:', error);
    }
  }

  // Crear la tabla de usuarios
  async createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      apellido TEXT,
      rut TEXT,
      telefono TEXT,
      email TEXT UNIQUE,
      password TEXT
    )`;
    try {
      await this.dbInstance?.executeSql(sql, []);
    } catch (error) {
      console.error('Error al crear la tabla de usuarios:', error);
    }
  }

  // Añadir un nuevo usuario a la base de datos
  async addUser(usuario: any): Promise<void> {
    const sql = `INSERT INTO usuarios (nombre, apellido, rut, telefono, email, password) VALUES (?, ?, ?, ?, ?, ?)`;
    const params = [usuario.nombre, usuario.apellido, usuario.rut, usuario.telefono, usuario.email, usuario.password];
    try {
      await this.dbInstance?.executeSql(sql, params);
      console.log('Usuario añadido con éxito:', usuario);
    } catch (error) {
      console.error('Error al añadir el usuario:', error);
    }
  }

  // Obtener todos los usuarios registrados
  async getAllUsers(): Promise<any[]> {
    const sql = `SELECT * FROM usuarios`;
    try {
      const res = await this.dbInstance?.executeSql(sql, []);
      const usuarios: any[] = [];
      for (let i = 0; i < res.rows.length; i++) {
        usuarios.push(res.rows.item(i));
      }
      return usuarios;
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      return [];
    }
  }

  // Verificar si un usuario con el correo y contraseña ingresados existe
  async validateUser(email: string, password: string): Promise<any> {
    const sql = `SELECT * FROM usuarios WHERE email = ? AND password = ?`;
    try {
      const res = await this.dbInstance?.executeSql(sql, [email, password]);
      if (res.rows.length > 0) {
        return res.rows.item(0); // Retorna el usuario encontrado
      }
      return null;
    } catch (error) {
      console.error('Error al validar las credenciales del usuario:', error);
      return null;
    }
  }

  // Guard para proteger rutas si el usuario está autenticado
  async canActivate(): Promise<boolean> {
    const usuarioRegistrado = await this.getAllUsers(); // Obtener los usuarios registrados
    if (usuarioRegistrado.length > 0) {
      return true;
    } else {
      this.router.navigate(['/login']);
=======

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
>>>>>>> 921f1a61ed3b6398c0876b97587b8418676c0c10
      return false;
    }
  }
}
