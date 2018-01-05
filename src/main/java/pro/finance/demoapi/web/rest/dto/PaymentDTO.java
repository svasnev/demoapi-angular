package pro.finance.demoapi.web.rest.dto;

import java.math.BigDecimal;

import pro.finance.demoapi.domain.enums.PaymentType;

/**
 * Created by s.vasnev (s.vasnev@advcash.com) on 05.01.18.
 */
public class PaymentDTO {

	private String walletNumber;

	private PaymentType paymentType;

	private BigDecimal amount;

	public String getWalletNumber() {
		return walletNumber;
	}

	public void setWalletNumber(String walletNumber) {
		this.walletNumber = walletNumber;
	}

	public PaymentType getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(PaymentType paymentType) {
		this.paymentType = paymentType;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		final StringBuilder sb = new StringBuilder("PaymentDTO{");
		sb.append("walletNumber='").append(walletNumber).append('\'');
		sb.append(", paymentType=").append(paymentType);
		sb.append(", amount=").append(amount);
		sb.append('}');
		return sb.toString();
	}
}
