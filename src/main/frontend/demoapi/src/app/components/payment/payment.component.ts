import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PaymentServiceService} from "../../services/payment-service.service";
import {SessionServiceService} from "../../services/session-service.service";
import {SystemAccount} from "../../shared/SystemAccount";
import {Wallet} from "../../shared/Wallet";
import {Payment, PaymentType} from "../../shared/Payment";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PaymentValidatorDirective} from "../../directive/payment-validator.directive";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private paymentService: PaymentServiceService,
              private fb: FormBuilder,
              private sessionService: SessionServiceService) {}

  wallet: Wallet;

  payments: Payment[];

  keys: string[];


  addPaymentForm: FormGroup;


  ngOnInit() {
	  var keys = Object.keys(PaymentType);
	  this.keys = keys.slice(keys.length/2);
	  this.createForm();
      this.sessionService.selectedWallet$.subscribe(wallet =>{
        this.wallet = wallet;
        this.paymentService.getPaymentsByWalletNumber(this.wallet.number)
            .subscribe(payments => this.payments = payments);
        this.addPaymentForm.controls['walletAmount'].setValue(wallet.balance);
      });
      this.sessionService.emitAskForWallet(true);
  }


  createForm() {

    this.addPaymentForm = this.fb.group(
	    {
		    amount: ['', Validators.compose([Validators.required, Validators.min(0)])],
		    paymentType: ['DEPOSIT', Validators.required],
            walletAmount: [0]
	    }
    );

  }


  onSubmit(){
    let formModel = this.addPaymentForm.value;
    let payment = new Payment(null, formModel.amount, formModel.paymentType, this.wallet.number, null);

    this.paymentService.addPayment(payment).subscribe(addedPayment => {
      this.payments.push(addedPayment);
      this.sessionService.emitUpdateWalletNumber(this.wallet.number);
	  this.createForm();
    });



  }
}
