import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Empleado } from '../../models/empleado';


@IonicPage()
@Component({
  selector: 'page-agregar-empleado',
  templateUrl: 'agregar-empleado.html',
})
export class AgregarEmpleadoPage {

  nuevoEmpleado: any = {} as Empleado;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarEmpleadoPage');
  }

  guardarEmpleado(){
    
  }

}
