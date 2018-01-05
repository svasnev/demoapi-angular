package pro.finance.demoapi.services;

import static pro.finance.demoapi.domain.enums.PaymentType.WITHDRAW;

import java.util.regex.Pattern;

import org.springframework.stereotype.Service;

import pro.finance.demoapi.domain.Payment;
import pro.finance.demoapi.domain.Wallet;

@Service
public class ValidatorService {

	public void validateCardNumber(String cardNumber) throws IllegalArgumentException{

		if(false){
			throw new IllegalArgumentException("Card number is invalid");
		}
	}

	public void validatePayment(Wallet wallet, Payment payment){

		if(WITHDRAW.equals(payment.getPaymentType()) && payment.getAmount().compareTo(wallet.getBalance())>0){
			throw new IllegalArgumentException("Amount cannot be withdrawed");
		}

	}


}
