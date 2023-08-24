import { Component } from '@angular/core';
import { CategoriasService } from 'src/app/servicios/categorias.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent {

nombre!:any

constructor(private httpClientservices:CategoriasService) {
  }

Nombre_Categoria(){
  this.httpClientservices.store({Nombre_Categoria:this.nombre}).subscribe(data =>{
    alert('se creo la categorias');
  });
}


}
