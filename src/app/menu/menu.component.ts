import { Component } from '@angular/core';



@Component({
  selector: 'app-menu',
  standalone: false,

  templateUrl: './menu.component.html',

})
export class MenuComponent {


  selectedMenu: string = '';
  bandera1 = false;

  // Método para manejar el cambio de menú
  onMenuSelect(menu: string): void {
    this.selectedMenu = menu;
  }

  menu(){

  }

}
