import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Card} from "../shared/Card";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CardServiceService {

  constructor(private http: HttpClient) { }

  getCardsByAccountId(systemAccountId: string) : Observable<Card[]>{

    const cardsUrl = `http://localhost:8080/api/${systemAccountId}/cards`;
    return this.http.get<Card[]>(cardsUrl);
  }

  addCardToAccount(systemAccountId: string, cardNumber: string) : Observable<Card> {

    const cardsUrl = `http://localhost:8080/api/${systemAccountId}/cards`;

    return this.http.post<Card>(cardsUrl, cardNumber);
  }

}
