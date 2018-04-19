import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Empleado } from '../../models/empleado';
import { EmpresaService } from '../../services/empresa.services';
import { Empresa } from '../../models/empresa';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { EmpleadoService } from '../../services/empleado.services';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-agregar-empleado',
  templateUrl: 'agregar-empleado.html',
})
export class AgregarEmpleadoPage {

  public currentDate: number;

  empresaDatos: any = {} as Empresa;
  id: any = null;
  empresa: Observable<any>
  empresas: any = null;
  nuevoEmpleado: any = {} as Empleado;
  //empleado: any = null;
  rut: any = null;
  empleadoId: any = null;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public empresaService: EmpresaService,
    public empleadoService: EmpleadoService,
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
      empresaService.getEmpresas().valueChanges()
      .subscribe( empresas => {
        console.log(empresas)
        this.empresas = empresas;
      });
    };
    this.empleadoId = navParams.get('empleadoId');
    if(this.empleadoId !=0){
      empleadoService.getEmpleados().valueChanges()
      .subscribe( empleados => {
        console.log(empleados)
        this.nuevoEmpleado = empleados;
      });
    };
    this.currentDate = Date.now();
  }

  guardarEmpleado(){
      if(this.empleadoId !=0){
        this.empleadoService.createEmpleado(this.nuevoEmpleado);
        alert('Empleado editado con éxito');
      }
      else{
        this.nuevoEmpleado.empleadoId = this.rut();
        this.empleadoService.createEmpleado(this.nuevoEmpleado);
        alert('Empleado creado con éxito');
      }
      this.navCtrl.setRoot(HomePage);
    }

    ionViewDidLoad() {
    
      console.log();
    }
}
