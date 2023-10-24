"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const customer_entity_1 = require("../entities/customer.entity");
const transaction_entity_1 = require("../entities/transaction.entity");
const wallet_entity_1 = require("../entities/wallet.entity");
let TransactionService = class TransactionService {
    async getAllTransactions() {
        return transaction_entity_1.Transaction.findAll();
    }
    async getTransactionsWithSubTables() {
        return transaction_entity_1.Transaction.findAll({
            include: [{
                    model: customer_entity_1.Customer
                }, { model: wallet_entity_1.Wallet }]
        });
    }
    async getTransactionById(transactionId) {
        return transaction_entity_1.Transaction.findByPk(transactionId);
    }
    async getTransactionsByCustomer(customerId) {
        return transaction_entity_1.Transaction.findAll({
            where: {
                customerId: customerId
            }
        });
    }
    async getTransactionsByWallet(walletId) {
        return transaction_entity_1.Transaction.findAll({
            where: {
                walletId: walletId
            }
        });
    }
    async getTransactionByCustomerAndWallet(walletId, customerId) {
        return transaction_entity_1.Transaction.findAll({
            where: {
                walletId: walletId,
                customerId: customerId
            }
        });
    }
    async createTransaction(transaction, errorMessage) {
        try {
            var trans = new transaction_entity_1.Transaction();
            trans = transaction;
            trans.errorMessage = errorMessage;
            trans.time = new Date();
            transaction_entity_1.Transaction.create({ trans });
            var senderWallet = this.walletService.getWalletById(trans.senderWalletId);
            var reeciverwallet = this.walletService.getWalletById(trans.receiverWalletId);
            this.updateSenderAndReceiverWallets(await senderWallet, await reeciverwallet, trans.amount);
            return trans;
        }
        catch (error) {
            throw new Error('An error has been occured:' + error);
        }
    }
    async updateSenderAndReceiverWallets(senderWallet, receiverWallet, amount) {
        senderWallet.update({
            balance: senderWallet.balance - amount,
            updatedAt: new Date()
        });
        receiverWallet.update({
            balance: receiverWallet.balance + amount,
            updatedAt: new Date()
        });
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)()
], TransactionService);
//# sourceMappingURL=transaction.service.js.map