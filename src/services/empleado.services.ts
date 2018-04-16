import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmpleadoService{
    constructor(
        public afDatabase: AngularFireDatabase,
    ){}

    idEmpresa: any = null;
    empresas: any = { id: null, nombre: null }
    id: any = null;

    public getEmpleados(){
        return this.afDatabase.list(`Empresas/`);
    }
    public getEmpleado(id){
        return this.afDatabase.object(`Empresas/`+id);
    }
    public createEmpleado(empresa){
        return this.afDatabase.database.ref(`Empresas/`+empresa.id).set(empresa);
    }
}