import { Component } from '@angular/core';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {
 editar!:any
 id!:any



/*  constructor(private httpClientservices:CategoriasService) {} */
 constructor(private route: ActivatedRoute,private httpClientservices:CategoriasService) { }

  ngOnInit(): void {
    // Obtén el valor del parámetro 'id' de la ruta actual.
    this.id= this.route.snapshot.paramMap.get('id');
    this.httpClientservices.show(this.id).subscribe((data:any) => {
      console.log(data);
      this.editar = data.Categoria.Nombre_Categoria;
    })


    // Si el ID es un número, puedes convertirlo a number:
    // this.id = +this.route.snapshot.paramMap.get('id');
}
Update()
{
  this.httpClientservices.update(this.id,{Nombre_Categoria:this.editar}).subscribe((data) => {
    alert('Se actualizado la categoria');
    });
}
}
