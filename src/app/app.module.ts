import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.module';
import * as admin from 'firebase-admin';
//import { functions } from 'firebase-functions';


//Servicios
import { EmpleadoService } from '../services/empleado.services';
import { EmpresaService } from '../services/empresa.services';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { AgregarEmpresaPageModule } from '../pages/agregar-empresa/agregar-empresa.module';
import { ListaEmpresasPageModule } from '../pages/lista-empresas/lista-empresas.module';
import { AgregarEmpleadoPageModule } from '../pages/agregar-empleado/agregar-empleado.module';
import { EnrolarEmpleadoPageModule } from '../pages/enrolar-empleado/enrolar-empleado.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    AgregarEmpresaPageModule,
    LoginPageModule,
    ListaEmpresasPageModule,
    AgregarEmpleadoPageModule,
    EnrolarEmpleadoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    
    StatusBar,
    SplashScreen,
    EmpresaService,
    EmpleadoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
