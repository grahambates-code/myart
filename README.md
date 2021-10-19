# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `gql actions`

````type Mutation {
  createCognitoUser (
    arg1: CreateCognitoInput!
  ): CreateCognitoOutput
}

input CreateCognitoInput {
  Email : String!
  DeploymentId : String!
  FamilyName : String!
  FirstName : String!
  FormsForUser : jsonb
  PhoneCountryCode : String!
  PhoneNumber : String!
  AccountId : String
  Role : String!
}

type CreateCognitoOutput {
  sub : String!
}````


https://znzz14rsra.execute-api.eu-west-1.amazonaws.com/dev/authAPI/create



type Query {
  getCognitoUser (
    userId: String!
  ): CognitoUser
}

type CognitoUser {
  UserId : String
  UserName : String
  AccountId : String
  UserStatus : String
  UserCreateDate : String
  UserLastModifiedDate : String
}

https://znzz14rsra.execute-api.eu-west-1.amazonaws.com/dev/authAPI/findUserById
https://znzz14rsra.execute-api.eu-west-1.amazonaws.com/dev/authAPI/list


### Creating Super Admin

Note - 11111111-1111-1111-1111-11111111 is a special account_id for super admins for the roles to be deleted when an account is deleted

````
mutation {

  mutation {
   insert_account_table(objects : {
    id : "11111111-1111-1111-1111-11111111",
    type : "SUPERADMIN",
    name : "SUPERADMIN"
  }) {
    returning {
      id
    }
  }
  }

  createCognitoUser(arg1 : {
    Role :"admin",
    FirstName : "Prem",
    FamilyName : "Singh",
    Email : "prem.singh@spglobal.com",
    PhoneNumber : "441223245743",
    FormsForUser : [],
    DeploymentId : "a574bb18-8560-4cae-9f40-4970c7af5e68",
    AccountId : "11111111-1111-1111-1111-11111111"
  }) {
    sub
  }
}
