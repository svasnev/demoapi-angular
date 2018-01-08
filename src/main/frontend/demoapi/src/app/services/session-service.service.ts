import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Wallet} from "../shared/Wallet";

@Injectable()
export class SessionServiceService {

  params : Map<string,any> = new Map();

  private emitChangeWalletNumber = new Subject<string>();
  private emitSelectWallet = new Subject<Wallet>()
  private emitAskForSelectedWallet = new Subject<boolean>();

  selectedWallet$ = this.emitSelectWallet.asObservable();
  walletNumberChange$ = this.emitChangeWalletNumber.asObservable();
  askForWallet$ = this.emitAskForSelectedWallet.asObservable();


  constructor() {
  }

  put(key: string, value): void{
    this.params[key] = value;
  }

  get(key: string): any{
    return this.params[key];
  }

  emitAskForWallet(ask:boolean){
    this.emitAskForSelectedWallet.next(ask);
  }

  emitUpdateWalletNumber(change: string) {
      this.emitChangeWalletNumber.next(change);
  }

  emitUpdateSelectedWallet(walet: Wallet){
    this.emitSelectWallet.next(walet);
  }

}
