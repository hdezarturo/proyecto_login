import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
// import { login } from '../Pojos/LoginGlobal';
// import { datosDelVehiculo } from '../Pojos/datosDelVehiculo';
// import { datosDelVehiculom } from '../Pojos/PojosMoral/datosDelVehiculoM';

// import { datosGenerales } from '../Pojos/datosGenerales';

// import { mediosContacto } from '../Pojos/datosMedioContacto';
// import { DomicilioParticular } from '../Pojos/domicilio';
// import { datosFactura } from '../Pojos/datosDeLaFactura';
// import { datosDia } from '../Pojos/selecionDia/Dia';
// import { creaCuenta } from '../Pojos/crearCuenta';
// import { DomicilioFiscalMoral } from '../Pojos/PojosMoral/domicilioMoral';
// import { datosGeneralesEmpresa } from '../Pojos/PojosMoral/datosGeneralesdeLaEmpresa';
// import { datosFacturam } from '../Pojos/PojosMoral/datosDeLaFacturaM';







@Injectable({
  providedIn: 'root',
})
//////////////=>https://api-alta-vehiculo-nuevo.sefintlax.gob.mx/altaVehicularNuevo/ ////AMBIENTE DE SERVIDOR

//////////////=>http://10.20.0.57:8091/////AMBIENTE LOCAL

export class GobiernoService {
  // repuestaLogin = new login();

  //////////////////////////idTramite
  id_tramites_sicovet_by_user!: string;
  ///////////////////////////notificaciones
  id_notificaciones_tramites_sicovet!: string;


  id_TramiteDia!: string;

    /////////////////id_PErsona empresa   (id_persona_empresa )
    // id_persona_empresa!: string;





  constructor(private http: HttpClient, private router: Router) {

    // this.repuestaLogin = new login();



  }

  // getDataLogin(): login{
  //   return this.repuestaLogin;
  // }



  // Login(user: string, password: string) {

  //   // const encodedUsuario = encodeURIComponent(usuario);
  //   const encodedPassword = encodeURIComponent(password);

  //   console.log("username en servicio", user)

  //   let url = `http://10.20.0.57:8091/api/LoginRequest?user=${user}&password=${encodedPassword}`;
  //   // let url = `https://api-contratista.finanzastlax.gob.mx/contratista/api/LoginRequest?user=${user}&password=${encodedPassword}`;
  //   console.log("que lleva la url ",url)
  //   return this.getQuery("", url).pipe(map((data: any) => data));
  // }



  // Login(user: string, password: string) {

  //   // const encodedUsuario = encodeURIComponent(usuario);
  //   const encodedPassword = encodeURIComponent(password);

  //   console.log("username en servicio", user)

  //   let url = `http://10.20.0.57:8091/api/LoginRequest?user=${user}&password=${encodedPassword}`;
  //   // let url = `https://api-contratista.finanzastlax.gob.mx/contratista/api/LoginRequest?user=${user}&password=${encodedPassword}`;
  //   console.log("que lleva la url ",url)
  //   return this.getQuery("", url).pipe(map((data: any) => data));
  // }

   constUrlGlobal= "http://localhost:8091";
 // constUrlGlobal= "https://api-alta-vehiculo-nuevo.sefintlax.gob.mx/altaVehicularNuevo";





//////////////////////////////////////// Login /////////////////////////////////////////////////////
  loginaaa(user: string, password: string): Observable<any> {
    // const encodedPassword = encodeURIComponent(password);
    // Define la URL del servicio
    // const url = 'http://10.20.0.57:8091/api/LoginRequest';
    // https://alta-vehiculo-nuevo.sefintlax.gob.mx/
    // const url = 'https://alta-vehiculo-nuevo.sefintlax.gob.mx/altaVehicularNuevo/api/LoginRequest';
    const url = this.constUrlGlobal+'/api/LoginRequest';

    // Define el cuerpo de la solicitud
    const requestBody = {
      user: user,
      password: password
    };


    console.log('PARAMETROS Datos RFC', requestBody);

    // Realiza la solicitud POST con el cuerpo de la solicitud
    return this.http.post(url, requestBody);
  }

    ///
}
