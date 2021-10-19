import React, {useState} from 'react';
import gql from "graphql-tag";
import {Mutation} from "react-apollo";

const UPDATE = gql`
 
mutation($asset_id : uuid, $x : numeric, $y : numeric)  {
  update_asset_table(where: {id: {_eq: $asset_id}}, _set: {x: $x}) {
     returning {
      id
    }
  }
}

`;

export default function Saver({children, refetch}) {

    return (

            <Mutation
                mutation={UPDATE}
                onError={() => {alert('error')}}
                onCompleted={() => {refetch(); alert('saved position ')}}>
                {children}
            </Mutation>

    );
}
