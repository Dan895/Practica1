import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { RegistroComponent } from "./componentes/registro/registro.component";
//import { HostDinamicoDirective } from "./directiva/host-dinamico.directive";//esta es una directiva para tener un host dinamico
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica1';
  
  show:boolean = false;//sirve para mostrar el registro de sesion

  //@ViewChild(HostDinamicoDirective) public dynamicHost: HostDinamicoDirective;//parte del host dinamico

  constructor(
    ///private componentFactoryResolver: ComponentFactoryResolver //configuracion que es parte de un compoenente dinamico
  ){}

  /*public createComponent(){
    const componente = this.componentFactoryResolver.resolveComponentFactory(RegistroComponent);
    this.dynamicHost.viewContaienerRef.clear();
    this.dynamicHost.viewContaienerRef.createComponent(componente);
  }*/
}
