import { Wallet } from "src/entities/wallet.entity";
export declare class WalletService {
    getAllWallets(): Promise<Wallet[]>;
    getActiveWallets(): Promise<Wallet[]>;
    getWalletById(walletId: number): Promise<Wallet>;
    getWalletsByCustomer(customerId: string): Promise<Wallet[]>;
    createWallet(wallet: Wallet): Promise<Wallet>;
}
