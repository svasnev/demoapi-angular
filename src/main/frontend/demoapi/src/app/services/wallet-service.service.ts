import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Wallet} from "../shared/Wallet";

@Injectable()
export class WalletServiceService {

  constructor(private http: HttpClient) { }

  getWalletsByAccountId(systemAccountId: string) : Observable<Wallet[]>{
    return this.http.get<Wallet[]>(`http://localhost:8080/api/${systemAccountId}/wallets`);
  }

	getWalletByWalletNumber(walletNumber: string) : Observable<Wallet>{
		return this.http.get<Wallet>(`http://localhost:8080/api/wallets?walletNumber=${walletNumber}`);
	}

}
