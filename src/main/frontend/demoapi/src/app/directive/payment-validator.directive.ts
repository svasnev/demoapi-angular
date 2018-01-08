import { Directive } from '@angular/core';
import {AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {PaymentType} from "../shared/Payment";
import {isDefined, noUndefined} from "@angular/compiler/src/util";

@Directive({
  selector: '[app-payment-validator]',
  providers: [{provide: NG_VALIDATORS, useExisting: PaymentValidatorDirective, multi: true}]
})
export class PaymentValidatorDirective implements Validator{

	validate(control: AbstractControl): ValidationErrors | any {
		console.log(control);

		if(control
			&& control instanceof FormGroup
			&& this.shouldValidate(control)){

		 const amount = control.controls['amount'].value;
		 const paymentType = control.controls['paymentType'].value;
		 const amountInWallet = control.controls['walletAmount'].value;
		 if(paymentType == 'WITHDRAW' && (amountInWallet - amount)<0){
			 console.log("INVALID");
		    return {withdrawAmountInvalid: true};
		  }


		}
	}

	shouldValidate(control: FormGroup): boolean{
		return (control.dirty || control.touched)
		&& control.controls['paymentType']
		&& control.controls['paymentType'].value
		&& control.controls['walletAmount']
		&& control.controls['walletAmount'].value
		&& control.controls['amount']
		&& control.controls['amount'].value
		&& control.controls['amount'].dirty
	}

	constructor() { }

}
