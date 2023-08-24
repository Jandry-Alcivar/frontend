import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerCategoriaComponent } from './pages/ver-categoria/ver-categoria.component';
import { EditarCategoriaComponent } from './pages/editar-categoria/editar-categoria.component';
import { CrearCategoriaComponent } from './pages/crear-categoria/crear-categoria.component';

const routes: Routes = [
  {
    path:'',component:VerCategoriaComponent
  },
  {
    path:'editarcategoria/:id',component:EditarCategoriaComponent
  },
  {
    path:'crearcategoria',component:CrearCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
