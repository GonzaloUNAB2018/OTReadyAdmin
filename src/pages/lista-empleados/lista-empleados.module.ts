import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEmpleadosPage } from './lista-empleados';

@NgModule({
  declarations: [
    ListaEmpleadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEmpleadosPage),
  ],
})
export class ListaEmpleadosPageModule {}
