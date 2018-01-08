package pro.finance.demoapi.web.rest;

import java.util.UUID;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import pro.finance.demoapi.domain.Wallet;
import pro.finance.demoapi.repository.WalletRepository;

@RestController
public class WalletsRestController {

	@Autowired
	private WalletRepository walletRepository;

	@RequestMapping(method = RequestMethod.GET, value="/api/{systemAccountId}/wallets")
	public List<Wallet> findAllByAccount(@PathVariable UUID systemAccountId) {
		return walletRepository.findAllBySystemAccountId(systemAccountId);
	}

	@RequestMapping(value="/api/wallets")
	public Wallet findOneByWalletNumber(@RequestParam("walletNumber") String walletNumber){
		return walletRepository.findOneByNumber(walletNumber).orElseThrow(
			() -> new EntityNotFoundException("Wallet with number" + walletNumber + "not found"));
	}
}
