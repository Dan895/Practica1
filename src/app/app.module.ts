import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; //agrega los formulario reactivos

//Aquí se producen las importaciones
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { RegistroComponent } from './componentes/registro/registro.component';
//agrega en los imports una instancia del import del ReactiveFormsModule
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ImagenesComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
