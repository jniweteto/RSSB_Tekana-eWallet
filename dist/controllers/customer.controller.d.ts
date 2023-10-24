import { Customer } from 'src/entities/customer.entity';
import { CustomerService } from 'src/services/customer.service';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    getAllCustomers(active?: boolean): Promise<Customer[]>;
    getCustomerById(customerId: string): Promise<Customer>;
    createCustomer(customer: Customer): Promise<Customer>;
}
