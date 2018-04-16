import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Empleado } from '../../models/empleado';
import { EmpresaService } from '../../services/empresa.services';
import { Empresa } from '../../models/empresa';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-agregar-empleado',
  templateUrl: 'agregar-empleado.html',
})
export class AgregarEmpleadoPage {

  empresas: any = {} as Empresa
  nuevoEmpleado: any = {} as Empleado;
  id: any = null;
  nombre: any = null;
  empresaId: any = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public empresaService: EmpresaService,
    public afDatabase: AngularFireDatabase,
  ) {
    

    /*Leer lista de empresas
    this.id = navParams.get('id');
    if(this.id !=0){
      empresaService.getEmpresas().valueChanges()
      .subscribe(empresas => {
        console.log(empresas)
        this.empresas = empresas
      })
    }*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarEmpleadoPage');
  }

  guardarEmpleado(){

  }

}
