import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { AppRoutingModule } from './app-routing.module';
import { FiltroPipe } from './filtro.pipe';
import { FormsModule } from '@angular/forms';
import { DiasHastaPipe } from './dias-hasta.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    FiltroPipe,
    DiasHastaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
