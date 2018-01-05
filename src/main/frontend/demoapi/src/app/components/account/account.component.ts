import { Component, OnInit } from '@angular/core';
import {SystemAccount} from "../../shared/SystemAccount";
import {SessionServiceService} from "../../services/session-service.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  systemAccount: SystemAccount;

  constructor(private sessionService: SessionServiceService) { }

  ngOnInit() {
    this.systemAccount = this.sessionService.get("systemAccount");
  }

}
