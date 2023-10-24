# Tekana eWallet Exercise

This is an exercise for RSSB BE applilcation + Strategy

# TRATEYGY



# Source Code for the Coding exercise
## Instructions

* The application was impleted using ```Nest JS```, ```Typescript```, and ```SQL database```. This means that to run, you should have sql server running on your machine.
* It comprises APIs to create and read data from 3 tables, namely customers, wallets, and transactions. The code for the logic is in the ```src``` directory.

## Required packages
```'@nestjs```
```@nestjs/sequelize```
You may also need to install other packages depending on the node version you are using but those are the primary ones

## how to run the application
Install the above packages using ```npm``` command, then run
You need to ***connect to your sql server and add your database credentials*** in the ```src/app.module.ts```. Then run the following command to launch the app:
```npm start```

Go to your browser and visit ```localhost:3000```

You can the use POSTMAN or any other client to do tests