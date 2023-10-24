import { Transaction } from 'src/entities/transaction.entity';
import { TransactionService } from 'src/services/transaction.service';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    getAllTransactions(customerId?: string, walletId?: number): Promise<Transaction[]>;
    createTransaction(transaction: Transaction, errorMessage?: string): Promise<Transaction>;
}
