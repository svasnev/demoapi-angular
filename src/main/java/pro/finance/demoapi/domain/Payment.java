package pro.finance.demoapi.domain;

import java.math.BigDecimal;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import pro.finance.demoapi.domain.enums.PaymentType;

/**
 * Created by s.vasnev (s.vasnev@advcash.com) on 05.01.18.
 */

@Entity
@Table(name = "payment")
public class Payment extends BaseEntity{


	public Payment(){

	}

	public Payment(PaymentType paymentType, Wallet wallet, BigDecimal amount) {
		this.paymentType = paymentType;
		this.wallet = wallet;
		this.amount = amount;
	}

	@Enumerated(EnumType.STRING)
	@Column(name="payment_type", nullable = false, length = 50)
	private PaymentType paymentType;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "wallet_id")
	private Wallet wallet;

	@Column(name = "amount", nullable = false)
	private BigDecimal amount = BigDecimal.ZERO;


	public PaymentType getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(PaymentType paymentType) {
		this.paymentType = paymentType;
	}

	public Wallet getWallet() {
		return wallet;
	}

	public void setWallet(Wallet wallet) {
		this.wallet = wallet;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		final StringBuilder sb = new StringBuilder("Payment{");
		sb.append("paymentType=").append(paymentType);
		sb.append(", wallet=").append(wallet);
		sb.append(", amount=").append(amount);
		sb.append('}');
		return sb.toString();
	}
}
