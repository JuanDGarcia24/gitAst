import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { ControlComponent } from './control/control.component';
import { MenuPlanetasComponent } from './menu-planetas/menu-planetas.component';
import { PlanetasComponent } from './planetas/planetas.component';

const routes: Routes = [
	{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'control', component: ControlComponent },
   { path: 'planetas', component: MenuPlanetasComponent },
  { path: 'planetas/:planeta', component: MenuPlanetasComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
