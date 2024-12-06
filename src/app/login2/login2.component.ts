import { Component } from '@angular/core';
import { GobiernoService } from '../services/gobierno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  standalone: false,
  templateUrl: './login2.component.html',

})
export class Login2Component {

  constructor(private tramite: GobiernoService,private router: Router) {


  }


  email: string = ''; // Valor para correo electronico
  password: string = ''; // Valor para password

  login(){

    this.tramite.loginaaa(this.email, this.password).subscribe(
      (response) => {
        console.log(response);

        if(response.menssage === 'authorized'){
          this.router.navigate(['/Menu'])
        }

      },
      (error) => {
        console.error(error);
      }
    )
  }


}
