import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Payment} from "../shared/Payment";

@Injectable()
export class PaymentServiceService {


  private paymentsUrl = 'http://localhost:8080/api/payments';

  constructor(private http: HttpClient) {}

  getPaymentsByWalletNumber(walletNumber: string): Observable<Payment[]>{

    const url = `${this.paymentsUrl}?walletNumber=${walletNumber}`;

    return this.http.get<Payment[]>(url);
  }

  addPayment(payment: Payment): Observable<Payment>{
    return this.http.post<Payment>(this.paymentsUrl, payment);
  }

}
