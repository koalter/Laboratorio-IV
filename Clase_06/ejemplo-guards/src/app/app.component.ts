import { Component } from '@angular/core';
import { ParametrosService } from './shared/parametros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo-guards';

  constructor(private service : ParametrosService) {}

  cambiar() {
    this.service.pasa = !this.service.pasa;
  }
}
