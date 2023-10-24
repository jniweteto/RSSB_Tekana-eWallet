"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletService = void 0;
const common_1 = require("@nestjs/common");
const wallet_entity_1 = require("../entities/wallet.entity");
let WalletService = class WalletService {
    async getAllWallets() {
        return wallet_entity_1.Wallet.findAll();
    }
    async getActiveWallets() {
        return wallet_entity_1.Wallet.findAll({ where: {
                active: true
            } });
    }
    async getWalletById(walletId) {
        return wallet_entity_1.Wallet.findByPk(walletId);
    }
    async getWalletsByCustomer(customerId) {
        return wallet_entity_1.Wallet.findAll({
            where: {
                customerId: customerId
            }
        });
    }
    async createWallet(wallet) {
        return wallet_entity_1.Wallet.create({ wallet });
    }
};
exports.WalletService = WalletService;
exports.WalletService = WalletService = __decorate([
    (0, common_1.Injectable)()
], WalletService);
//# sourceMappingURL=wallet.service.js.map