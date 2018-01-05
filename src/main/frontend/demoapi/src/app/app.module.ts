import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AccountSearchComponent } from './components/account-search/account-search.component';
import { ShowErrorsComponent } from './components/show-errors/show-errors.component';
import {FormsModule} from "@angular/forms";
import {SystemAccountServiceService} from "./services/system-account-service.service";
import {HttpClientModule} from "@angular/common/http";
import { CardsComponent } from './components/cards/cards.component';
import { AccountComponent } from './components/account/account.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import {CardServiceService} from "./services/card-service.service";
import {WalletServiceService} from "./services/wallet-service.service";
import {SessionServiceService} from "./services/session-service.service";


@NgModule({
  declarations: [
    AppComponent,
    AccountSearchComponent,
    ShowErrorsComponent,
    CardsComponent,
    AccountComponent,
    WalletsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SystemAccountServiceService, CardServiceService, WalletServiceService, SessionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
