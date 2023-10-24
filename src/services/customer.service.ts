import { Injectable } from "@nestjs/common";
import { Customer } from "src/entities/customer.entity";

@Injectable()
export class CustomerService {
    async getAllCustomers(): Promise <Customer[]> {
        return Customer.findAll();
    }

    async getAllActiveCustomers () : Promise <Customer[]>{
        return Customer.findAll({where: {
            active : true
        }})
    }

    async getCustomerById(customerId : string) : Promise <Customer> {
        return Customer.findByPk(customerId);
    }

    async createCustomer (customer : Customer): Promise<Customer> {
        return Customer.create({customer});
    }

}
