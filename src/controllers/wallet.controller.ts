import { Controller, Get, Post, Body, Param, BadRequestException } from '@nestjs/common'
import { Wallet } from 'src/entities/wallet.entity';
import { WalletService } from 'src/services/wallet.service';

@Controller('wallets')
export class WalletController {
    constructor(private readonly walletService: WalletService) { }

    // Read wallets.
    @Get()
    getAllWallets(active: boolean = false, customerId: string = null): Promise<Wallet[]> {
        try {
            if (customerId != null) {
                return this.walletService.getWalletsByCustomer(customerId);
            }
            return active ? this.walletService.getActiveWallets() :
                this.walletService.getAllWallets();
        }
        catch(error){
            // In this case, I have return a bad request but there are multiple possibilities of error depending on the business logic
            throw new BadRequestException('Eroor occured while processing the request, '+error);
        }
    }

    @Get()
    getWalletById(@Param('walletId') walletId: number): Promise<Wallet> {
        try { return this.walletService.getWalletById(walletId); }
        catch (error) {
            // In this case, I have return a bad request but there are multiple possibilities of error depending on the business logic
            throw new BadRequestException('Eroor occured while processing the request, ' + error);
        }
    }

    /*This is one example of the create API but there can be multiple options.
    For instance, we cahave an api that takes paraments instead of the entire object
    However, i found this the bet approach because some of the attributes that are not neccessarily
    sent from the client side can be configured in the automapper config file.*/

    @Post()
    createWallet(@Body() wallet: Wallet): Promise<Wallet> {
        try {
            return this.walletService.createWallet(wallet);
        }
        catch (error) {
            // In this case, I have return a bad request but there are multiple possibilities of error depending on the business logic
            throw new BadRequestException('Invalid request '+ error);
        }
    }
}