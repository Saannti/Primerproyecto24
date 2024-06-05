import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductosComponent } from './page/productos/productos.component';
import { MarcaComponent } from './page/marca/marca.component';
import { TipoComponent } from './page/tipo/tipo.component';


@NgModule({
  declarations: [
    ProductosComponent,
    MarcaComponent,
    TipoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],

  exports: [
    ProductosComponent,
    MarcaComponent,
    TipoComponent
  ]

})
export class ProductoModule { }
