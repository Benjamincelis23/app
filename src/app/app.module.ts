import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

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
