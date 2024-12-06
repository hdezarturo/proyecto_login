import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { ServicesComponent } from './services/services.component';
import { Login2Component } from './login2/login2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './listado/listado.component'; // Importar provideHttpClient y withFetch

@NgModule({
  declarations: [
    AppComponent,


    Login2Component,
                MenuComponent,
                ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
