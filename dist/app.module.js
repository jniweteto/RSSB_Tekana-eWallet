"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const customer_entity_1 = require("./entities/customer.entity");
const wallet_entity_1 = require("./entities/wallet.entity");
const transaction_entity_1 = require("./entities/transaction.entity");
const customer_service_1 = require("./services/customer.service");
const wallet_service_1 = require("./services/wallet.service");
const transaction_service_1 = require("./services/transaction.service");
const customer_controller_1 = require("./controllers/customer.controller");
const wallet_controller_1 = require("./controllers/wallet.controller");
const transaction_controller_1 = require("./controllers/transaction.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'tekanaewallet',
                password: 'tekanewallet',
                database: 'tekana',
                autoLoadModels: true,
                synchronize: true
            }),
            sequelize_1.SequelizeModule.forFeature([customer_entity_1.Customer, wallet_entity_1.Wallet, transaction_entity_1.Transaction])
        ],
        controllers: [app_controller_1.AppController, customer_controller_1.CustomerController, wallet_controller_1.WalletController, transaction_controller_1.TransactionController],
        providers: [app_service_1.AppService, customer_service_1.CustomerService, wallet_service_1.WalletService, transaction_service_1.TransactionService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map