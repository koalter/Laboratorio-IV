import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      'nombre': ['', [Validators.required]]
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      console.log(this.form.getRawValue());
      this.form.controls['nombre'].setValue('');
    } else {
      console.error(this.form.errors);
    }
  }
}
