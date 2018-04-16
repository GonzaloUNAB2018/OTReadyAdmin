import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaEmpresasPage } from '../lista-empresas/lista-empresas';
import { AgregarEmpleadoPage } from '../agregar-empleado/agregar-empleado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toListaEmpresas(){
    this.navCtrl.push(ListaEmpresasPage);
  }

  toAgregarEmpleado(){
    this.navCtrl.push(AgregarEmpleadoPage);
  }

}
