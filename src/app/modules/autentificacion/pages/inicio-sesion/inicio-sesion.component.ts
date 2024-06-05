import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

  hide = true;

  public perfil: Usuario[];

  constructor() {
    this.perfil = [{

      uid: '',
      nombre: 'sannti ',
      apellido: 'Elcrack',
      email: 'scainca@gmail.com ',
      rol: 'visit',
      password: 'elgasolero'
    }
    ]
  }

  perfiless: Usuario = {
    uid: '',
    nombre: ' ',
    apellido: '',
    email: ' ',
    rol: '',
    password: ''

  }
  colecionPerfiles: Usuario[] = [];

  comparador() {
    const credencailess = {
      uid: this.perfiless.uid,
      nombre: this.perfiless.nombre,
      apellido: this.perfiless.apellido,
      email: this.perfiless.email,
      rol: this.perfiless.rol,
      password: this.perfiless.password
    }

    for (let i = 0; i <= this.perfil.length; i++) {
      const comparacion = this.perfil[i];
      if (comparacion.uid === credencailess.uid && comparacion.nombre === credencailess.nombre && comparacion.apellido === credencailess.apellido && comparacion.email === credencailess.email && comparacion.rol === credencailess.rol && comparacion.password === credencailess.password) {
        alert("ingresaste")
        break
      }
      else {
        alert("Datos incorrectos")
      }

    }
  }



}
