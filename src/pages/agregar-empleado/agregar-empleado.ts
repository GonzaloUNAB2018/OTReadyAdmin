import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Empleado } from '../../models/empleado';
import { EmpresaService } from '../../services/empresa.services';
import { Empresa } from '../../models/empresa';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';



@IonicPage()
@Component({
  selector: 'page-agregar-empleado',
  templateUrl: 'agregar-empleado.html',
})
export class AgregarEmpleadoPage {

  empresaDatos: any = {} as Empresa;
  id: any = null;
  empresa: Observable<any>
  empresas: any = null;
  nuevoEmpleado: any = {} as Empleado;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public empresaService: EmpresaService,
    public afDatabase: AngularFireDatabase,
  ) {

    //Leer lista de empresas
    this.id = navParams.get('id');
    if(this.id !=0){
      let loader = this.loadingCtrl.create({
        content: "Cargando datos...",
        duration: 1500
      });
      loader.present();
      empresaService.getEmpresas().valueChanges().subscribe( empresas => {
        console.log(empresas)
        this.empresas = empresas;
      });
    }

  }


  ionViewDidLoad() {
    
    console.log();
  }

  guardarEmpleado(){

  }

}
