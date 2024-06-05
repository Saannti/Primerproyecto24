import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input de la contraseña para los caracteres o no 
  hide = true;

  //importar interfa de usuaio 
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }
  //CREAMOS COLECCION DE USUARIOS, TIPO "USUARIO PARA ARRAYS (ARREGLOS"
  coleccionUsarios: Usuario[] = [];

  //FUNCION PARA REGISTROS DE NUEVOS USUARIOS
  registrar() {
    //contante de credencialess, resguardar la informacion que ingrese el usuario

    const credencialess = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }

    //envaimos la nueva informacion como un nuevo objeto a la coleccion de usuarios 
    this.coleccionUsarios.push(credencialess)

    //mostrar credenciales por consola
    console.log(credencialess);
    console.log(this.coleccionUsarios);
  }
  limpiarInputs() {
    const inputs = {
      //


      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''


    }
    alert("Registrado corerectamente")
  }

}
