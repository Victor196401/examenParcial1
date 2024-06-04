import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServicesService {

  constructor() { }

  logHolaMundo(){
    return console.log('Hola Mundo')
  }
}
