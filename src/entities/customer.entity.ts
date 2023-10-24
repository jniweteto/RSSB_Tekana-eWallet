import {
    Table,
    Column,
    Model,
    PrimaryKey,
    Default,
    DataType
}
    from 'sequelize-typescript';

// This class represents a model for customer.

@Table
export class Customer extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
        defaultValue: DataType.UUIDV4,
        type: DataType.UUID,
    })
    customerId: string

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    email: string;

    @Column
    phoneNumber: string

    @Column
    address: string;

    @Column
    active: boolean;

    @Column
    createdAt: Date;

    @Column 
    updatedAt?: Date; // This can nullable for fresh customers

}
