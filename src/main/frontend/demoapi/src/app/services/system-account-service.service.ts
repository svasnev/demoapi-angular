import { Injectable } from '@angular/core';
import {SystemAccount} from "../shared/SystemAccount";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SystemAccountServiceService {

  private systemAccuountsUrl = 'http://localhost:8080/api/systemAccounts';

  constructor(private http: HttpClient) { }

  getSystemAccounts() : Observable<SystemAccount[]>{
    return this.http.get<SystemAccount[]>(this.systemAccuountsUrl);
  }

  getSystemAccountByEmail(email: string) : Observable<SystemAccount> {
    const url = `${this.systemAccuountsUrl}?email=${email}`;
    return this.http.get<SystemAccount>(url);
  }

  getSystemAccountById(id: string) : Observable<SystemAccount> {
    const url = `${this.systemAccuountsUrl}/${id}`;
    return this.http.get<SystemAccount>(url);
  }
}
