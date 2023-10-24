import { Controller, Get, Post, Body, Param, BadRequestException } from '@nestjs/common'
import { Customer } from 'src/entities/customer.entity'
import { CustomerService } from 'src/services/customer.service'

@Controller('customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    // Read all customers
    @Get()
    getAllCustomers(active: boolean = false): Promise<Customer[]> {
        try{
            return active ? this.customerService.getAllActiveCustomers() :
                this.customerService.getAllCustomers();
        }
        catch(error){
            // In this case, I have return a bad request but there are multiple possibilities of error depending on the business logic
            throw new BadRequestException('Eroor occured while processing the request, '+error);
        }
    }

    @Get()
    getCustomerById(@Param('customerId') customerId: string): Promise<Customer> {
        try{
            return this.customerService.getCustomerById(customerId);
        }
        catch(error){
            // In this case, I have return a bad request but there are multiple possibilities of error depending on the business logic
            throw new BadRequestException('Eroor occured while processing the request, '+error);
        }
    }

    @Post()
    createCustomer(@Body() customer: Customer): Promise<Customer> {
        /*if we dont get customer as an object from the client, we will instantiate it here by new Customer() constructor, and then we update the properties accordingly before call the createCustomer method.

        This is one example of the create API but there can be multiple options.
        For instance, we cahave an api that takes paraments instead of the entire object
        However, i found this the bet approach because some of the attributes that are not neccessarily
        sent from the client side can be configured in the automapper config file.*/
        try {
            return this.customerService.createCustomer(customer);
        }
        catch {
            // In this case, I have return a bad request but there are multiple possibilities of error depending on the business logic
            throw new BadRequestException('Invalid request');
        }
    }
}