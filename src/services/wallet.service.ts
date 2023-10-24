import { Injectable } from "@nestjs/common";
import { Wallet } from "src/entities/wallet.entity";

@Injectable()
export class WalletService {
    async getAllWallets(): Promise<Wallet[]> {
        return Wallet.findAll();
    }

    async getActiveWallets(): Promise <Wallet[]>{
        return Wallet.findAll({where :{
            active : true
        }});
    }

    async getWalletById(walletId: number): Promise<Wallet> {
        return Wallet.findByPk(walletId);
    }

    async getWalletsByCustomer(customerId: string): Promise<Wallet[]> {
        return Wallet.findAll({
            where: {
                customerId: customerId
            }
        })
    }

    async createWallet(wallet: Wallet): Promise<Wallet> {
        return Wallet.create({ wallet });
    }

}
