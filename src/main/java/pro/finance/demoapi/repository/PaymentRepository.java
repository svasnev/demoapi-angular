package pro.finance.demoapi.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

import pro.finance.demoapi.domain.Payment;

/**
 * Created by s.vasnev (s.vasnev@advcash.com) on 05.01.18.
 */
public interface PaymentRepository extends CrudRepository<Payment, UUID> {

	List<Payment> findAllByWalletId(UUID walletId);

	List<Payment> findAllByWalletNumber(String walletNumber);

	List<Payment> findAllByWalletSystemAccountId(UUID walletSystemAccountId);
}
