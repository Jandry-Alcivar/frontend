import { Component } from '@angular/core';
import { CategoriasService } from 'src/app/servicios/categorias.service';


@Component({
  selector: 'app-ver-categoria',
  templateUrl: './ver-categoria.component.html',
  styleUrls: ['./ver-categoria.component.css']
})
export class VerCategoriaComponent {

  constructor(private httpClientservices:CategoriasService) {
    this.httpClientservices.index().subscribe((data:any)=>{console.log(data)
      this.nombreVerCategoria=data.categorias
    })
  }
  Eliminar(id:any)
  {
    this.httpClientservices.destrory(id).subscribe(data =>{
      alert('se elimino correctamente');
    });
  }



  nombreVerCategoria:any


}
