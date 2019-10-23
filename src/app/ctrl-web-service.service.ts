import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { HttpClient } from '@angular/common/http';


///import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CtrlWebServiceService {


  constructor( public http: HttpClient) { }


  create(entity: any, ruta: string): any {

    return this.http.get(`${'http://ionic.io'}?i=${1}`);
   /// return;
  }

  update(entity: any, ruta: string): any {

  }

  delete(entity: any, ruta: string): any {

  }

  getById(entity: any, ruta: string): any {

  }
  getAll(ruta: string): any {

  }
}
