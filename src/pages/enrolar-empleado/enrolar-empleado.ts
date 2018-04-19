import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Empleado } from '../../models/empleado';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import { Empresa } from '../../models/empresa';
import { EmpresaService } from '../../services/empresa.services';

@IonicPage()
@Component({
  selector: 'page-enrolar-empleado',
  templateUrl: 'enrolar-empleado.html',
})
export class EnrolarEmpleadoPage {

  empresas: {}[];
  user = {} as Empleado;
  empresa = {} as Empresa;
  id : any = null;
  
  public loading:Loading;
  constructor(
    public navCtrl: NavController,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public afDb: AngularFireDatabase,
    public navParams: NavParams,
    public empresaService: EmpresaService,
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

  }
  signup(){

    
    
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
    .then(

      res => {
        this.navCtrl.setRoot(HomePage);
      }, error => {
        let alert = this.alertCtrl.create({
          title: 'Email Incorrecto',
          subTitle: 'El Email ingresado ya está ingresado, por favor intente con otro correo',
          buttons: ['OK']
        });
        alert.present();})
        let loader = this.loadingCtrl.create({
          content: 'Por favor espere...',
          duration: 2000
        });
        loader.present();
        this.afAuth.authState.subscribe(auth => {
          this.afDb.object('Empresas/'+this.empresa.id+'/'+this.user.empresa+'/'+this.user.primerNombre+' '+this.user.primerApellido).set(this.user)
        });
        console.log(this.empresa.id);
        console.log(this.empresa.nombre);
        console.log(this.user.empresa);

  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEmpleadosPage');
  }

}

