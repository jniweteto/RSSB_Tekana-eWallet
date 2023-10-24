import { Customer } from "src/entities/customer.entity";
export declare class CustomerService {
    getAllCustomers(): Promise<Customer[]>;
    getAllActiveCustomers(): Promise<Customer[]>;
    getCustomerById(customerId: string): Promise<Customer>;
    createCustomer(customer: Customer): Promise<Customer>;
}
