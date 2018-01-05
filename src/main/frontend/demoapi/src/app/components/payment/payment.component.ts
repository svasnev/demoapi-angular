import { Component, OnInit } from '@angular/core';
import {PaymentServiceService} from "../../services/payment-service.service";
import {SessionServiceService} from "../../services/session-service.service";
import {SystemAccount} from "../../shared/SystemAccount";
import {Wallet} from "../../shared/Wallet";
import {Payment, PaymentType} from "../../shared/Payment";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private paymentService: PaymentServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) { }

  walletNumber: string;

  payments: Payment[];


  addPaymentForm: FormGroup;


  ngOnInit() {
    this.route.params.subscribe(param =>  {
      this.walletNumber = param['walletNumber'];
      this.paymentService.getPaymentsByWalletNumber(this.walletNumber).subscribe(
        payments => this.payments = payments
      );
    });

    this.createForm();
  }


  createForm() {
    this.addPaymentForm = this.fb.group(
      {
        amount: ['', Validators.required],
        paymentType: ['DEPOSIT']
      }
    );

  }

  onSubmit(){
    let formModel = this.addPaymentForm.value;
    console.log(formModel);
    let payment = new Payment(null, formModel.amount, formModel.paymentType, this.walletNumber, null);

    this.paymentService.addPayment(payment).subscribe(addedPayment => this.payments.push(addedPayment));
  }

  keys() : Array<string> {
    var keys = Object.keys(PaymentType);
    return keys.slice(keys.length/2);
  }

}
