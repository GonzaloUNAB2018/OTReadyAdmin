import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnrolarEmpleadoPage } from './enrolar-empleado';

@NgModule({
  declarations: [
    EnrolarEmpleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(EnrolarEmpleadoPage),
  ],
})
export class EnrolarEmpleadoPageModule {}
