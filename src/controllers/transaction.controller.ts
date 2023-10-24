import { Controller, Get, Post, Body, Param, BadRequestException } from '@nestjs/common'
import { Transaction } from 'src/entities/transaction.entity';
import { TransactionService } from 'src/services/transaction.service';

@Controller('customers')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) { }

    /* This is just one read endpoint for this excercise for reading transactions. 
    There are multiple APIs that can created such as
    failed transaction, failed transaction per wallet/cutomers
    succeeded transaction, succeeded transactions per wallet/user
    and many more other depending on the business needs. */
    @Get()
    getAllTransactions(customerId: string = null, walletId: number = 0): Promise<Transaction[]> {
       
        try {
            if (customerId != null) {
                return this.transactionService.getTransactionsByCustomer(customerId);
            }
            else if (walletId > 0) {
                return this.transactionService.getTransactionsByWallet(walletId);
            }
            else if (walletId > 0 && customerId != null) {
                return this.transactionService.getTransactionByCustomerAndWallet(walletId, customerId);
            }
            else {
                return this.transactionService.getAllTransactions();
            }

        }
        catch(error){
            // In this case, I have return a bad request but there are multiple possibilities of error depending on the business logic
            throw new BadRequestException('Eroor occured while processing the request, '+error);
        }

    }

    /* The can be too many factors to create a transaction
    For instance, we can check user's wallet before creating a transanction
    we validate weather the amount being transacted is allowed according to the business rules
    There may be other business regulation to be verfied
    
    For this excise, i asssume no checks and as if everythings was validated from the client side
    
    This is one example of the create API but there can be multiple options.
    For instance, we cahave an api that takes paraments instead of the entire object
    However, i found this the bet approach because some of the attributes that are not neccessarily
    sent from the client side can be configured in the automapper config file.*/
    @Post()
    createTransaction(@Body() transaction: Transaction, errorMessage: string = null): Promise<Transaction> {
        try {
            var response = this.transactionService.createTransaction(transaction, errorMessage);
            // If the transactioni was successful, we update the wallets and the user
            // I am assuming that there is a specific function to update
            return response;
        }
        catch {
            // In this case, I have return a bad request but there are multiple possibilities of error depending on the business logic
            throw new BadRequestException('Invalid request');
        }
    }
}