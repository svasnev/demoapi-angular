import { Component, OnInit } from '@angular/core';
import {SystemAccountServiceService} from "../../services/system-account-service.service";
import {Router} from "@angular/router";
import {SessionServiceService} from "../../services/session-service.service";

@Component({
  selector: 'app-account-search',
  templateUrl: './account-search.component.html',
  styleUrls: ['./account-search.component.css']
})
export class AccountSearchComponent implements OnInit {

  searchAccountEmail: string = '';

  constructor(private accountService: SystemAccountServiceService, private router: Router, private session: SessionServiceService) {
  }



  ngOnInit() {
  }

  search(): void{
    this.accountService.getSystemAccountByEmail(this.searchAccountEmail)
      .subscribe(account => {
        this.session.put("systemAccount", account);
        this.router.navigate([`/systemAccount/${account.id}`])
      });
  }

}
