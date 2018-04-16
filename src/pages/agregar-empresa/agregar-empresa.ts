import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Empresa } from '../../models/empresa';
import { EmpresaService } from '../../services/empresa.services';

@IonicPage()
@Component({
  selector: 'page-agregar-empresa',
  templateUrl: 'agregar-empresa.html',
})
export class AgregarEmpresaPage {

  public currentDate: number;
  nuevaEmpresa: any = {} as Empresa;
  /*nuevaEmpresa: any = {
    nombre: null,
    id: null,
    direccion: null,
    razonSocial: null,
    ciudad: null,
    region: null,
    rut: null,
  }*/
  id: any = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public empresaService: EmpresaService,
    
  ) {

    this.id = navParams.get('id');

    if(this.id !=0){
      empresaService.getEmpresas().valueChanges()
      .subscribe(empresa => {
        console.log(empresa)
        this.nuevaEmpresa = empresa
      });
    };
    this.currentDate = Date.now();
  }

  guardarEmpresa(){
    if(this.id !=0){
      this.empresaService.createEmpresa(this.nuevaEmpresa);
      alert('Empresa editada con éxito');
    }
    else{
      this.nuevaEmpresa.id = Date.now();
      this.empresaService.createEmpresa(this.nuevaEmpresa);
      alert('Nueva empresa creada conn éxito');
    }
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarEmpresaPage');
  }

}
