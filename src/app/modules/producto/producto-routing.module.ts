import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './page/productos/productos.component';
import { MarcaComponent } from './page/marca/marca.component';
import { TipoComponent } from './page/tipo/tipo.component';

const routes: Routes = [
  { path: "producto", component: ProductosComponent },

  { path: "marca", component: MarcaComponent },
  
  { path: "tipo", component: TipoComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
