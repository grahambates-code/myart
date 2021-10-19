import React, { useContext } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { UserAuthenticationContext } from './UserAuthenticationProvider';
import { ApolloProviderContext } from './ApolloProvider';

const USER_QUERY = gql`
    query ($userId: uuid!) {
         user_table_by_pk(id: $userId) {
    
         id
    
         artist {
            id
            artworks(order_by: {created_at: desc}) {
              id
              title
              type
              
             assets(order_by: {created_on: asc}) {
                 id
                data
                name
                name
              }
              
              tags {
                artwork_id
                tag
              }
            }
          }
  
  }
    }
`;

export const UserContext = React.createContext({ user: null });

const UserProvider = ({ children }) => {
    const { session } = useContext(UserAuthenticationContext);
    const { userRole } = useContext(ApolloProviderContext);

    if (!session || !session.isValid()) return children;

    const userId = session.idToken.payload['sub'];

    return (
        <Query query={USER_QUERY} variables={{ userId }}>
            {({ loading, error, data, refetch }) => {
                // if ( error && error['graphQLErrors'].find((e) => e.extensions.code === 'access-denied'))
                //     return <h1> {session.idToken.payload['sub']} NOT AUTHED </h1>;

                const user = (data && data.user_table_by_pk) || null;

                return <UserContext.Provider value={{ user: user, refetch }}>{children}</UserContext.Provider>;
            }}
        </Query>
    );
};

export default UserProvider;
