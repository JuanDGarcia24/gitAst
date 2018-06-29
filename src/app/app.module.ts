import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FuselajeComponent } from './fuselaje/fuselaje.component';
import { MotorComponent } from './motor/motor.component';
import { CabinaComponent } from './cabina/cabina.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ControlComponent } from './control/control.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { FormatDegreesPipe } from './format-Degrees.pipe';
import { MenuPlanetasComponent } from './menu-planetas/menu-planetas.component';

@NgModule({
  declarations: [
    AppComponent,
    FuselajeComponent,
    MotorComponent,
    CabinaComponent,
    MenuComponent,
    InicioComponent,
    ControlComponent,
    PlanetasComponent,
    FormatDegreesPipe,
    MenuPlanetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
