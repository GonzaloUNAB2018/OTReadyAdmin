import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';


@Injectable()
export class EmpleadoService{


    constructor(
        public afDatabase: AngularFireDatabase,
    ){}

    empleados: any = { empleadoId: null, primerNombre: null }
    empleadoId: any = null;


    public getEmpleados(){
        return this.afDatabase.list(`Empleados/`);
    }
    public getEmpleado(empleadoId){
        return this.afDatabase.object(`Empleados/`+empleadoId);
    }
    public createEmpleado(empleado){
        return this.afDatabase.database.ref(`Empleados/`+empleado.empleadoId).set(empleado);
    }
}