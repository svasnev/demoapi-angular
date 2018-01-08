package pro.finance.demoapi.web.rest;

import static pro.finance.demoapi.domain.enums.PaymentType.DEPOSIT;
import static pro.finance.demoapi.domain.enums.PaymentType.WITHDRAW;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pro.finance.demoapi.domain.Payment;
import pro.finance.demoapi.domain.Wallet;
import pro.finance.demoapi.repository.PaymentRepository;
import pro.finance.demoapi.repository.WalletRepository;
import pro.finance.demoapi.services.ValidatorService;
import pro.finance.demoapi.web.rest.dto.PaymentDTO;

/**
 * Created by s.vasnev (s.vasnev@advcash.com) on 05.01.18.
 */

@RestController
public class PaymentsRestController {

	@Autowired
	private PaymentRepository paymentRepository;

	@Autowired
	private WalletRepository walletRepository;

	@Autowired
	private ValidatorService validatorService;


	@RequestMapping(method = RequestMethod.GET, value = "/api/payments")
	public List<PaymentDTO> getByWalletNumber(@RequestParam("walletNumber") String walletNumber) {
		return paymentRepository.findAllByWalletNumber(walletNumber)
			.stream().map(PaymentDTO::new).collect(Collectors.toList());
	}

	@RequestMapping(method = RequestMethod.POST)
	public PaymentDTO sendPayment(@RequestBody PaymentDTO paymentDTO) {

		Wallet wallet = walletRepository.findOneByNumber(paymentDTO.getWalletNumber())
			.orElseThrow(() -> new EntityNotFoundException("Wallet with number " + paymentDTO.getWalletNumber() + "not found"));

		Payment payment = new Payment(paymentDTO.getPaymentType(), wallet, paymentDTO.getAmount());

		validatorService.validatePayment(wallet, payment);
		if (WITHDRAW.equals(paymentDTO.getPaymentType())) {
			wallet.setBalance(wallet.getBalance().subtract(paymentDTO.getAmount()));
		} else if (DEPOSIT.equals(paymentDTO.getPaymentType())) {
			wallet.setBalance(wallet.getBalance().add(paymentDTO.getAmount()));
		} else {
			throw new IllegalArgumentException("Payment type is not supported/defined");
		}


		walletRepository.save(wallet);
		return new PaymentDTO(paymentRepository.save(payment));
	}
}
