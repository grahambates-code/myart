import React, { Fragment, useState } from 'react';
import { Input, Button, Checkbox } from '@mui/material';
import Alert from '@mui/material/Alert';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const ADD_ARTWORK = gql`
    mutation($artist_id : uuid!) {
      insert_artwork_table_one(object: {artist_id: $artist_id, title: "", type: ""}) {
        id
      }
    }
`;

export default function AddArtwork({ artist_id, refetch, setBigSideBar }) {

    return (
        <Mutation
            mutation={ADD_ARTWORK}
            variables={{artist_id : artist_id}}
            onCompleted={(e) => {
                refetch && refetch();
            }}
            onError={(e) => {
                alert(e);
            }}
        >
            {(MyMutation, { loading, error }) => {
                //if (loading) return null;

                return (
                    <Fragment>

                        <Button
                            style={{color : 'white'}}
                            id={'addArtwork'}
                            onClick={() => {
                                //setBigSideBar(true);
                                MyMutation();
                            }}
                        >
                            Add Artwork
                        </Button>

                    </Fragment>
                );
            }}
        </Mutation>
    );
}
