import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EmpresaService } from '../../services/empresa.services';
import { AngularFireAuth } from 'angularfire2/auth';
import { AgregarEmpresaPage } from '../agregar-empresa/agregar-empresa';

@IonicPage()
@Component({
  selector: 'page-lista-empresas',
  templateUrl: 'lista-empresas.html',
})
export class ListaEmpresasPage {

  id : any = null;
  empresas : any = null;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public empresaService: EmpresaService,
    public loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth
  
  ) {

    //Leer lista de empresas
    this.id = navParams.get('id');
    if(this.id !=0){
      let loader = this.loadingCtrl.create({
        content: "Cargando listado de empresas...",
        duration: 1500
      });
      loader.present();
      empresaService.getEmpresas().valueChanges()
      .subscribe(empresas => {
        console.log(empresas)
        this.empresas = empresas
      })
    }


  }

  //Agregar nueva empresa
  public goAgregarEmpresa(){
    this.navCtrl.push(AgregarEmpresaPage, {id:0});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEmpresasPage');
  }

}
