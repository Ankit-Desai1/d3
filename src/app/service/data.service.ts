import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  name:string | undefined;
  constructor() { }

  getName(event:any){
    this.name = event;
  }

  sendName(){
    return this.name
  }


}
