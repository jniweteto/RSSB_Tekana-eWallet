import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Customer } from './entities/customer.entity';
import { Wallet } from './entities/wallet.entity';
import { Transaction } from './entities/transaction.entity';
import { CustomerService } from './services/customer.service';
import { WalletService } from './services/wallet.service';
import { TransactionService } from './services/transaction.service';
import { CustomerController } from './controllers/customer.controller';
import { WalletController } from './controllers/wallet.controller';
import { TransactionController } from './controllers/transaction.controller';

// For database connection, replaced the details below with your sever and database details
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'tekanaewallet',
      password: 'tekanewallet',
      database: 'tekana',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Customer, Wallet, Transaction])
  ],
  controllers: [AppController, CustomerController, WalletController, TransactionController],
  providers: [AppService, CustomerService, WalletService, TransactionService],
})
export class AppModule {}
