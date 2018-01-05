import { Injectable } from '@angular/core';

@Injectable()
export class SessionServiceService {

  params : Map<string,any> = new Map();

  constructor() {

  }

  put(key: string, value): void{
    this.params[key] = value;
  }

  get(key: string): any{
    return this.params[key];
  }

}
