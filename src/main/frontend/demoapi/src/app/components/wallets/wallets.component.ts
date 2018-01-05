import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Wallet} from "../../shared/Wallet";
import {WalletServiceService} from "../../services/wallet-service.service";
import {SessionServiceService} from "../../services/session-service.service";
import {SystemAccount} from "../../shared/SystemAccount";

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {


  wallets: Wallet[];
  systemAccount: SystemAccount;

  constructor(
    private walletService: WalletServiceService,
    private sessionService: SessionServiceService,
  ) {
  }

  ngOnInit() {
      this.systemAccount = this.sessionService.get("systemAccount");
      this.walletService.getWalletsByAccountId(this.systemAccount.id)
        .subscribe(wallets => this.wallets = wallets);
  }
}
