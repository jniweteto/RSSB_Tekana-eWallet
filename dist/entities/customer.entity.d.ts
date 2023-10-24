import { Model } from 'sequelize-typescript';
export declare class Customer extends Model {
    customerId: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    active: boolean;
    createdAt: Date;
    updatedAt?: Date;
}
