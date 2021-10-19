import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Chip from "@mui/material/Chip";

const DELETE_TAG = gql`
 mutation MyMutation($artwork_id : uuid!, $tag : String! ) {
  delete_artwork_tags_table_by_pk(artwork_id: $artwork_id, tag: $tag) {
    artwork_id
  }
}

`;

export default function DeleteTag({  refetch, tag }) {

    return (
        <Mutation
            mutation={DELETE_TAG}
            onCompleted={(e) => {
                refetch && refetch();
            }}
            variables={{
                artwork_id  : tag.artwork_id,
                tag         : tag.tag
            }}
            onError={(e) => {

            }}
        >
            {(MyMutation, { loading, error }) => {
                //if (loading) return null;

                return (
                        <Chip label={tag.tag} variant="outlined" onDelete={MyMutation} />
                );
            }}
        </Mutation>
    );
}
