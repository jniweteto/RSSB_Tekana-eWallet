import { Model } from 'sequelize-typescript';
export declare class Wallet extends Model {
    walledId: number;
    customerId: string;
    balance: number;
    active: boolean;
    createdAt: Date;
    updatedAt?: Date;
}
