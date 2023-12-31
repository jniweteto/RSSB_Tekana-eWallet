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
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const customer_entity_1 = require("../entities/customer.entity");
const customer_service_1 = require("../services/customer.service");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    getAllCustomers(active = false) {
        return active ? this.customerService.getAllActiveCustomers() :
            this.customerService.getAllCustomers();
    }
    getCustomerById(customerId) {
        return this.customerService.getCustomerById(customerId);
    }
    createCustomer(customer) {
        try {
            return this.customerService.createCustomer(customer);
        }
        catch {
            throw new common_1.BadRequestException('Invalid request');
        }
    }
};
exports.CustomerController = CustomerController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getAllCustomers", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('customerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getCustomerById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_entity_1.Customer]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "createCustomer", null);
exports.CustomerController = CustomerController = __decorate([
    (0, common_1.Controller)('customers'),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerController);
//# sourceMappingURL=customer.controller.js.map