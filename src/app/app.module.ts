import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ruta padre -->modulo de raiz
import { AppRoutingModule } from './app-routing.module';
//archivo componet general
import { AppComponent } from './app.component';

//iportes de componentes locales
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
