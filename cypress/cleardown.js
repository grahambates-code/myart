import ApolloClient, { gql } from "apollo-boost";
import fetch from 'node-fetch';

//this wont current work by running node cleardown.js for some reason

const HASURA_SECRET = 'thisisadminkeyfortest';

const client = new ApolloClient({
    uri: "https://gql.dev.distro.energy/v1/graphql",
    headers: {
        'x-hasura-admin-secret': HASURA_SECRET
    }
});

export default () => {

   const deleteCognito = (userName) => {
       return fetch('https://znzz14rsra.execute-api.eu-west-1.amazonaws.com/dev/authAPI/delete', {
           method: 'post',
           body: JSON.stringify({input : {arg1 : {username : userName}}}),
           headers: {'Content-Type': 'application/json'}
       })
   }

   //delete users, then accounts, which uses a CASCASE to delete everything below it
   deleteCognito('mogmog+admin@gmail.com')
   .then(() => deleteCognito('mogmog+test@gmail.com'))
   .then(x => {
    client.mutate({
        mutation: gql`mutation {
                  delete_account_table(where: {deployment_id: {_is_null: false}}) {
                    returning {
                      id
                    }
                  }
                }
    `
    })
    });

}
