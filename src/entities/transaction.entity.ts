import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType,
    ForeignKey,
    Index
}
    from 'sequelize-typescript';
import { Customer } from './customer.entity';
import { Wallet } from './wallet.entity';

/* There could more transaction statuses depending on the business needs.
For this exercise, I have chosen the following 3 statuses
*/
enum Status {
    SUCCESS = 'Success',
    FAILED = 'Failed',
    PENDING = 'Pending'
}

// This class represent a model for transaction.

@Table
export class Transaction extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
    })
    @Index({ name: 'transactionId_idx' })
    transactionId: string

    @Column
    @ForeignKey(() => Customer)
    @Index({ name: 'senderId_idx' })
    senderId: string;

    @Column
    @ForeignKey(() => Customer)
    @Index({ name: 'receiverId_idx' })
    receiverId: string;

    @Column
    @ForeignKey(() => Wallet)
    @Index({ name: 'senderWalletId_idx' })
    senderWalletId: number;

    @Column
    @ForeignKey(() => Wallet)
    @Index({ name: 'receiverWalletId_idx' })
    receiverWalletId: number;

    @Column({
        type: DataType.DECIMAL,
    })
    amount: number;
    @Column
    description: string;

    @Column
    errorMessage: string; //if the transaction has failed, We will save the eroor message from the client

    @Column
    status: Status;

    @Column
    time : Date;

}
