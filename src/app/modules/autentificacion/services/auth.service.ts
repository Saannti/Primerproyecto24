import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //refernciar Auth de firebase en el servicio
  constructor(public auth: AngularFireAuth) { }
  //funcion para registro
  registrar(email: string, password: string) {
    //retorna el valor que es creado con el metodo "CreteEmail"
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  // Funcion para incio de sesion

  IniciarSesion(email: string, password: string) {


    // valida la informacion del usuario - saber si existe en la coleccion return
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  //funcion para cerrar sesion
  CerrarSesion() {
    //devuelve una promesa vacia - quita token 
    return this.auth.signOut();
  }
  //funcion para tomar uid
}