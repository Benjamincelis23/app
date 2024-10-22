import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { IonicStorageModule } from '@ionic/storage-angular'; 
import { DatabaseService } from './services/database.service'; 
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx'; // Importa SQLite

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,              
    IonicModule.forRoot(),      
    AppRoutingModule,           
    IonicStorageModule.forRoot() 
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatabaseService,
    SQLite // Registra SQLite como proveedor
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
=======

@NgModule({
  declarations: [AppComponent], // Declara el componente raíz de la aplicación
  imports: [
    BrowserModule,              // Módulo para funcionalidades básicas del navegador
    IonicModule.forRoot(),      // Configura Ionic para la aplicación
    AppRoutingModule            // Configura el enrutamiento de la aplicación
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } // Configura la estrategia de reutilización de rutas
  ],
  bootstrap: [AppComponent],    // Define el componente raíz que se inicializa
})
export class AppModule {}
>>>>>>> 921f1a61ed3b6398c0876b97587b8418676c0c10
