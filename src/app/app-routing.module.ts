import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/IniciarSesion'},
  { path: '', pathMatch: 'full', redirectTo: '/IniciarSesion'},
  { path: 'LoginAltaVehicular', component: Login2Component},
  { path: 'listado', component: ListadoComponent},
  { path: 'Menu', component: MenuComponent},
  { path: '**', component: Login2Component}
  ,];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
