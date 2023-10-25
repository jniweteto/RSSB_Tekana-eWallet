# Tekana eWallet Exercise

This is an exercise for RSSB BE applilcation + Strategy

# TRATEYGY
This strategy is for rebuilding an application fro scratch to re retire the legacy app specified in the BE Challenge. The strategy assumes that the application will grow and serve more than 1 million customers. It also assumes agile development to make work more efficient and good customer service delivery.

The following steps are going to be followed as a lifecyle to rebuild the legacy application from requirements gathering to the deployment stage. This stragy assumes that development team uses the ```scrum framework```. This means our work will be in ```sprints```.

* Understand how the legacy application works. 
* Identify the problems faced by the users and the organization (for example: on the user side, the legacy system might be so slow and offering a very bad user experience. On the organization side, it might be hard/impossible to scale, consuming a lot of resources such servers, lack of documentation, and other challenges).
* Gather requirements to implement the new system. In this case, I will work with the product owner to gather the requirements that will address the existing problems.
* Choose the database to be used. Since this app is serving a large number of customers, I will prefer using a relational database for better performance (eg: mysql, postgresql, ...).
* ``Design``: After the requirements are gathered, I will work on the best design to address the requirements.This includes but not limited to the database schema design, how database migration will be done, optimization of the database interactions, performance maximization, best coding practices for non-functional requirements, etc.
* Choose the resouces to be used for hosting our code and app. I'll go with GitHub for the code. Let me assume that we use Azure for our app deployment and our build pipelines.
* Create a repo for the new app project on GitHub.
* Create environments that will be using to host our new app in Azure. This mainly includes User Acceptance Test environment (UAT) and production.
* Setup the ```CI/CD pipeline``` for the new app.
* Set the rules for deploying to different environments. This is because the rules an approvals for deploying to UAT can be different fromt production.
* Write a guideline for coding standards. In most cases, lack of the coding standards will potentially result in the problems that we are already facing in the legacy system. However, if as the organization we have the standards we follow to write our code, it guarantees that we can easly mentain, scale and secure our code. All software developers should follow these standards; standards must be checked during pull request reviews.
* ``Implementation``: I will follow the design to implement the features. If the business choose to go with agile, we can develop small chuncks and deploye them. This means that we can take a certain functionality from the legacy app to the new app until all the features are retired from the legacy app. I will recommend to use the crum framework to acheive this. Retiring the entire application at once can cause unforeseen problems that can require a high cost to solve. However, deploying small chucks will garantee that our new system work fine and if there is a problem, it is easy to handle. 
* Quality testing: For any developed feature, I will do quality test and push the code to GitHub for review. Of course, I assume there will be someone to have an eye to my code before I push it to any environement. My recommendation is that, no code should be pushed to either UAT or production without a review. And this should be even set in our CI rules.
* User acceptance testing: Once the pull request is approved, I will deploy the fuctionality to UAT for stakeholders to test.
* Data migration: We should do data migation from the legacy sytem to the new app so that once we deploy the ```MVP``` of the new app, our customers will be able to start using the new system.
* ``Deployment``: Once UAT passes, the feature will be deployed to production. For the initial deployment, I assume there will be an MVP - This means that we will define and agree on the minimun features/functionalities required to have a first version of the new app live for use.
* ``Documentation``: For every single feature, it should be documented in terms of user manual, business logic documentation, API documentation, versioning, and any other sort of document types.
* Retire the deployed feature from the legacy system. If the retiring the functionality in the legacy system does not affect other features, retire it. Otherwise, prioritize the development of the dependent feature in the new app. This is to avoid similar functionalities in parallel and possible discrapancies.
* For every ```sprint```, there should be a goal to acheive. One or more functinalities to develop depending on the complexity. This will be done untill the entire legacy app is retired.


# Source Code for the Coding Part
## Instructions

* The application was impleted using ```Nest JS```, ```Typescript```, and ```SQL database```. This means that to run, you should have sql server running on your machine. I chose sql for best perfomance as the app will be serving more than 1 million users.
* It comprises APIs to create and read data from 3 tables, namely customers, wallets, and transactions. The code for the logic is in the ```src``` directory.

## Required packages
```@nestjs```
```@nestjs/sequelize```
You may also need to install other packages depending on the node version you are using but those are the primary ones

## how to run the application
Install the above packages using ```npm``` command, then run
You need to ***connect to your sql server and add your database credentials*** in the ```src/app.module.ts```. Then run the following command to launch the app:
```npm start```

Go to your browser and visit ```localhost:3000```

You can the use POSTMAN or any other client to do tests.