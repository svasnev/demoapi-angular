package pro.finance.demoapi.web.rest.dto;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Optional;

import javax.persistence.Column;

import com.fasterxml.jackson.annotation.JsonFormat;

import pro.finance.demoapi.domain.Payment;
import pro.finance.demoapi.domain.enums.PaymentType;

/**
 * Created by s.vasnev (s.vasnev@advcash.com) on 05.01.18.
 */
public class PaymentDTO {

	public PaymentDTO() {
	}

	public PaymentDTO(Payment payment){
		this.amount = payment.getAmount();
		this.createDate = Optional.of(payment.getCreateDate()).orElse(this.createDate);
		this.paymentType = payment.getPaymentType();
		this.walletNumber = payment.getWallet().getNumber();
	}

	private String walletNumber;

	private PaymentType paymentType;

	private BigDecimal amount;

	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	@Column(name="create_date", nullable = false)
	private Date createDate = new Date();

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

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	@Override
	public String toString() {
		final StringBuilder sb = new StringBuilder("PaymentDTO{");
		sb.append("walletNumber='").append(walletNumber).append('\'');
		sb.append(", paymentType=").append(paymentType);
		sb.append(", amount=").append(amount);
		sb.append(", createDate=").append(createDate);
		sb.append('}');
		return sb.toString();
	}
}
