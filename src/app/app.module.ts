import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearCategoriaComponent } from './pages/crear-categoria/crear-categoria.component';
import { VerCategoriaComponent } from './pages/ver-categoria/ver-categoria.component';
import { EditarCategoriaComponent } from './pages/editar-categoria/editar-categoria.component';
import { FormsModule } from '@angular/forms';
import { IngresarProductoComponent } from './pages/ingresar-producto/ingresar-producto.component';
@NgModule({
  declarations: [
    AppComponent,
    CrearCategoriaComponent,
    VerCategoriaComponent,
    EditarCategoriaComponent,
    IngresarProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
