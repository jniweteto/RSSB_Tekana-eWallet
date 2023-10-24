import { Wallet } from 'src/entities/wallet.entity';
import { WalletService } from 'src/services/wallet.service';
export declare class WalletController {
    private readonly walletService;
    constructor(walletService: WalletService);
    getAllWallets(active?: boolean, customerId?: string): Promise<Wallet[]>;
    getWalletById(walletId: number): Promise<Wallet>;
    createWallet(wallet: Wallet): Promise<Wallet>;
}
