import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ruta padre -->modulo de raiz
import { AppRoutingModule } from './app-routing.module';
//archivo componet general
import { AppComponent } from './app.component';

//iportes de componentes locales
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';// (vincula a la BD con la APP
import { AngularFireModule } from '@angular/fire/compat';// (trabaja con las colecciones de informacion)
import { AngularFireAuthModule } from '@angular/fire/compat/auth';// (trabaja con la autentificacion)
import { AngularFireStorageModule } from '@angular/fire/compat/storage';// (trabaja con imagenes y archivos)

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
