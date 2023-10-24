import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType,
    ForeignKey,
    AutoIncrement
}
    from 'sequelize-typescript';
import { Customer } from './customer.entity';

// This class represents a model for wallet.

@Table
export class Wallet extends Model {
    /* I have made this an integer so that
    we can display it to the user on the UI in case. 
    It will be more meaningful than displaying a UUID.
    */
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER, 
    })
    walledId: number

    /*Assuming that one user is allowed to have multiple wallets. 
    However, in case the business needs on-to-one relation, 
    I will add the BelongsTo decolator
    */
    @Column
    @ForeignKey(() => Customer)
    customerId: string;

    @Column({
        type: DataType.DECIMAL,
    })
    balance: number;

    @Column
    active: boolean; // Wallet can be active or not depending on thee business rules and regulations

    @Column
    createdAt: Date;

    @Column
    updatedAt?: Date; // can be null for a fresh wallet

}
