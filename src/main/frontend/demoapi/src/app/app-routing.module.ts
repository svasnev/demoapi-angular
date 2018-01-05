import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccountSearchComponent} from "./components/account-search/account-search.component";
import {AccountComponent} from "./components/account/account.component";
import {CardsComponent} from "./components/cards/cards.component";
import {WalletsComponent} from "./components/wallets/wallets.component";



const accountRoutes: Routes = [
  {path: 'cards', component: CardsComponent},
  {path: 'wallets', component: WalletsComponent},
];

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: AccountSearchComponent },
  { path: 'systemAccount/:id', component: AccountComponent, children: accountRoutes }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
