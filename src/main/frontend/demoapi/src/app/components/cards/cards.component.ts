import { Component, OnInit } from '@angular/core';
import {CardServiceService} from "../../services/card-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Card} from "../../shared/Card";
import {SessionServiceService} from "../../services/session-service.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  pattern = '^((4\\d{3})|(5[1-5]\\d{2})|(6011)|(34\\d{1})|(37\\d{1}))-?\\s?\\d{4}-?\\s?\\d{4}-?\\s?\\d{4}|3[4,7][\\d\\s-]{15}$'

  cards: Card[];

  accountId: string;

  cardNumber: string;


  constructor(private cardService: CardServiceService, private sessionService: SessionServiceService) {}

  ngOnInit() {

      this.accountId = this.sessionService.get("systemAccount").id;
      this.cardService.getCardsByAccountId(this.accountId)
        .subscribe(cards => this.cards = cards);
  }

  addCard():void{
    this.cardService.addCardToAccount(this.accountId, this.cardNumber).subscribe(
      card => this.cards.push(card)
    );
    this.cardNumber = '';
  }
}
