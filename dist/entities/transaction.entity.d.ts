import { Model } from 'sequelize-typescript';
declare enum Status {
    SUCCESS = "Success",
    FAILED = "Failed",
    PENDING = "Pending"
}
export declare class Transaction extends Model {
    transactionId: string;
    senderId: string;
    receiverId: string;
    senderWalletId: number;
    receiverWalletId: number;
    amount: number;
    description: string;
    errorMessage: string;
    status: Status;
    time: Date;
}
export {};
