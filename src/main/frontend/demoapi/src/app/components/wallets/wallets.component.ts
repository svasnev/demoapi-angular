import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Wallet} from "../../shared/Wallet";
import {WalletServiceService} from "../../services/wallet-service.service";
import {SessionServiceService} from "../../services/session-service.service";

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {


  wallets: Wallet[];


  constructor(private walletService: WalletServiceService, private sessionService: SessionServiceService) {
  }

  ngOnInit() {

      this.walletService.getWalletsByAccountId(this.sessionService.get("systemAccount").id)
        .subscribe(wallets => this.wallets = wallets);
  }
}
