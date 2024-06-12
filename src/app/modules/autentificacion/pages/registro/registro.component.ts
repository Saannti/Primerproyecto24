import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

// importamos servicio de autentificacion
import { AuthService } from '../../services/auth.service';
// importamos componente de rutas de angular
import { Router } from '@angular/router'




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
  //iniciliza un servicio
  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ) { }

  //FUNCION PARA REGISTROS DE NUEVOS USUARIOS
  async registrar() {
    //contante de credencialess, resguardar la informacion que ingrese el usuario

    /*
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
     console.log(this.coleccionUsarios);}

    */
    //registro con servicio 
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password

    }

    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
      //el metodo THEN es una promesa que devuelove el mismo valor si todo sale bien

      .then(res => {
        alert("se registro exittosamente")


        // el metodo NAIVIGATE nos redirecciona a otra vista 

        this.servicioRutas.navigate(['/inicio'])
      })
    this.limpiarInputs()
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
