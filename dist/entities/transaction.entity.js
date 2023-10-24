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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const customer_entity_1 = require("./customer.entity");
const wallet_entity_1 = require("./wallet.entity");
var Status;
(function (Status) {
    Status["SUCCESS"] = "Success";
    Status["FAILED"] = "Failed";
    Status["PENDING"] = "Pending";
})(Status || (Status = {}));
let Transaction = class Transaction extends sequelize_typescript_1.Model {
};
exports.Transaction = Transaction;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
    }),
    (0, sequelize_typescript_1.Index)({ name: 'transactionId_idx' }),
    __metadata("design:type", String)
], Transaction.prototype, "transactionId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    (0, sequelize_typescript_1.ForeignKey)(() => customer_entity_1.Customer),
    (0, sequelize_typescript_1.Index)({ name: 'senderId_idx' }),
    __metadata("design:type", String)
], Transaction.prototype, "senderId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    (0, sequelize_typescript_1.ForeignKey)(() => customer_entity_1.Customer),
    (0, sequelize_typescript_1.Index)({ name: 'receiverId_idx' }),
    __metadata("design:type", String)
], Transaction.prototype, "receiverId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    (0, sequelize_typescript_1.ForeignKey)(() => wallet_entity_1.Wallet),
    (0, sequelize_typescript_1.Index)({ name: 'senderWalletId_idx' }),
    __metadata("design:type", Number)
], Transaction.prototype, "senderWalletId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    (0, sequelize_typescript_1.ForeignKey)(() => wallet_entity_1.Wallet),
    (0, sequelize_typescript_1.Index)({ name: 'receiverWalletId_idx' }),
    __metadata("design:type", Number)
], Transaction.prototype, "receiverWalletId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL,
    }),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Transaction.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Transaction.prototype, "errorMessage", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Transaction.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Transaction.prototype, "time", void 0);
exports.Transaction = Transaction = __decorate([
    sequelize_typescript_1.Table
], Transaction);
//# sourceMappingURL=transaction.entity.js.map