import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaEmpresasPage } from '../lista-empresas/lista-empresas';
import { AgregarEmpleadoPage } from '../agregar-empleado/agregar-empleado';
import { EnrolarEmpleadoPage } from '../enrolar-empleado/enrolar-empleado';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public afAuth: AngularFireAuth
  
  ) {
  }

  logout(){
    this.afAuth.auth.signOut().then(
      res => {
        this.navCtrl.setRoot(LoginPage);
      }, error => {
        
        });    
  }

  toListaEmpresas(){
    this.navCtrl.push(ListaEmpresasPage);
  }

  toEnrolarEmpleado(){
    this.navCtrl.push(EnrolarEmpleadoPage);
  }

}
