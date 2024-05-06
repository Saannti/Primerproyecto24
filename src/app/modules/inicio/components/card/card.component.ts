import { Component } from '@angular/core';
import { Zapatillas } from 'src/app/models/zapatillas';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // PROPIEDAD PUBLICA (TIPO: ARRAYD)

  public info: Zapatillas[];

  // constructor le da vida a ñas variables que creamos ("info")
  constructor() {

    //recibe mas de un valor porque es un arrgelo
    this.info = [
      {
        id: "",
        nombre: "Nike runing",
        anno: 2024,
        modelo: "Dragonfly",
        talle: 41,
        imagen: "https://static.nike.com/a/images/c_limit,w_608,f_auto/t_product_v1/6a7f6e03-dfc1-4474-b72a-aa385d32e417/image.jpg",
        alt: ""
      }, {
        id: "",
        nombre: "Nike runing",
        anno: 2022,
        modelo: "Rival Distance",
        talle: 42,
        imagen: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5eda478f-9576-478d-9216-b4277740edcc/calzado-de-atletismo-con-clavos-rival-distance-37tSzt.png",
        alt: ""
      }, {
        id: "",
        nombre: "Nike runing",
        anno: 2022,
        modelo: "Air Zoom Victpry",
        talle: 40,
        imagen: "https://media.madeinparadis.es/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/8/3/835998-001_a.jpg",
        alt: ""
      }



    ]
  }

}
