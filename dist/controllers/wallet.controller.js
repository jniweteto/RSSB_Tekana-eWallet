"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletController = void 0;
const common_1 = require("@nestjs/common");
const wallet_entity_1 = require("../entities/wallet.entity");
const wallet_service_1 = require("../services/wallet.service");
let WalletController = class WalletController {
    constructor(walletService) {
        this.walletService = walletService;
    }
    getAllWallets(active = false, customerId = null) {
        if (customerId != null) {
            return this.walletService.getWalletsByCustomer(customerId);
        }
        return active ? this.walletService.getActiveWallets() :
            this.walletService.getAllWallets();
    }
    getWalletById(walletId) {
        return this.walletService.getWalletById(walletId);
    }
    createWallet(wallet) {
        try {
            return this.walletService.createWallet(wallet);
        }
        catch {
            throw new common_1.BadRequestException('Invalid request');
        }
    }
};
exports.WalletController = WalletController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getAllWallets", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('walletId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getWalletById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [wallet_entity_1.Wallet]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "createWallet", null);
exports.WalletController = WalletController = __decorate([
    (0, common_1.Controller)('customers'),
    __metadata("design:paramtypes", [wallet_service_1.WalletService])
], WalletController);
//# sourceMappingURL=wallet.controller.js.map