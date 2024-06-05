import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  // ruta por defecto de la instalacion
  


  { path: "", component: InicioComponent },

  //ruta que nos vincule el modulo de inicio y todo su contenido

  { path: "", loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule) },

  { path: "", loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule) },
  
  //path es una ruta, va con comillas vacias porque no queremos que nos cargue todo el modulo. ()=> es una fucion flecha, nos indica la ruta del modulo
  { path: "", loadChildren: () => import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
