import { Injectable } from "@nestjs/common";
import { Customer } from "src/entities/customer.entity";
import { Transaction } from "src/entities/transaction.entity";
import { Wallet } from "src/entities/wallet.entity";
import { WalletService } from "./wallet.service";

@Injectable()
export class TransactionService {
    private readonly walletService: WalletService;

    async getAllTransactions(): Promise<Transaction[]> {
        return Transaction.findAll();
    }

    async getTransactionsWithSubTables(): Promise<Transaction[]> {
        return Transaction.findAll({
            include: [{
                model: Customer

            }, { model: Wallet }]
        });
    }

    async getTransactionById(transactionId: string): Promise<Transaction> {
        return Transaction.findByPk(transactionId);
    }

    async getTransactionsByCustomer(customerId: string): Promise<Transaction[]> {
        return Transaction.findAll({
            where: {
                customerId: customerId
            }
        })
    }

    async getTransactionsByWallet(walletId: number): Promise<Transaction[]> {
        return Transaction.findAll({
            where: {
                walletId: walletId
            }
        })
    }
    async getTransactionByCustomerAndWallet(walletId: number, customerId: string): Promise<Transaction[]> {
        return Transaction.findAll({
            where: {
                walletId: walletId,
                customerId: customerId
            }
        })
    }
    async createTransaction(transaction: Transaction, errorMessage: string): Promise<Transaction> {
        try {
            var trans = new Transaction();
            trans = transaction;
            trans.errorMessage = errorMessage;
            trans.time = new Date();
            Transaction.create({ trans });
            var senderWallet = this.walletService.getWalletById(trans.senderWalletId);
            var reeciverwallet = this.walletService.getWalletById(trans.receiverWalletId);

            // I have assumed that the transaction status is SUCCESS. This won't be the base if the transaction has failed
            this.updateSenderAndReceiverWallets(await senderWallet, await reeciverwallet, trans.amount);

            return trans;
        } catch (error) {
            throw new Error('An error has been occured:' + error);
        }
    }

    async updateSenderAndReceiverWallets(senderWallet: Wallet, receiverWallet: Wallet, amount: number) {
        senderWallet.update({
            balance: senderWallet.balance - amount,
            updatedAt: new Date()
        });

        receiverWallet.update({
            balance: receiverWallet.balance + amount,
            updatedAt: new Date()
        });
    }

}
