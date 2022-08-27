import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentaComponent } from './components/venta/venta.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { VentaDelDiaComponent } from './components/venta-del-dia/venta-del-dia.component';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent,
    ClienteComponent,
    VentaDelDiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
