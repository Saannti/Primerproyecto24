import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup } from "@angular/fire/compat/firestore";
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoneService {

  /*Define de forma privada la colecion de usuarios para que no sea accesible  en toda la aplicacion lo definimos como una collecion de firebase que rspete la estructura de neutra interfaz 'usuario'
  */
  private UsuariCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) {
/*UsuarioCollection va a definir la nueva collecion 'usuarios que esta en nuetra base de datos */

    this.UsuariCollection = this.database.collection<Usuario>('usuarios')
  }
}
