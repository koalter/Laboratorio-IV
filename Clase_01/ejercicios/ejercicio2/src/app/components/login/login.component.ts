import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nombre: string = '';
  clave: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  enviar(): void {
    const usuario: Usuario = new Usuario(this.nombre, this.clave)
    console.log(usuario);
  }

}
