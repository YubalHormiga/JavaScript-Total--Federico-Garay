import { Component } from '@angular/core';

@Component({
  selector: 'app-saludador',
  templateUrl: './saludador.component.html',
  styleUrls: ['./saludador.component.css']
})
export class SaludadorComponent {
  mensaje: string = '';

  saludar() {
    this.mensaje = "Hola Mundo";
  }
}
