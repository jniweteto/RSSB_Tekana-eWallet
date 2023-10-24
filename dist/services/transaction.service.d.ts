import { Transaction } from "src/entities/transaction.entity";
import { Wallet } from "src/entities/wallet.entity";
export declare class TransactionService {
    private readonly walletService;
    getAllTransactions(): Promise<Transaction[]>;
    getTransactionsWithSubTables(): Promise<Transaction[]>;
    getTransactionById(transactionId: string): Promise<Transaction>;
    getTransactionsByCustomer(customerId: string): Promise<Transaction[]>;
    getTransactionsByWallet(walletId: number): Promise<Transaction[]>;
    getTransactionByCustomerAndWallet(walletId: number, customerId: string): Promise<Transaction[]>;
    createTransaction(transaction: Transaction, errorMessage: string): Promise<Transaction>;
    updateSenderAndReceiverWallets(senderWallet: Wallet, receiverWallet: Wallet, amount: number): Promise<void>;
}
