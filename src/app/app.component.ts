import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = '' ;
  registrado = false;
  nombrE:string = "";
  apellidO:string = "";
  entradas: object[]; 

  constructor(){
    this.entradas = [
      {titulo: "python"},
      {titulo: "java"},
      {titulo: "angular"},
      {titulo: "css"},
      {titulo: "JS"},
    ];
  }


  registrarUsuario(){
    this.mensaje = "Usuario registrado satisfactoriamente." 
    this.registrado = true;
  }


}

