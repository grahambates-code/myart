import React, { Fragment, useState } from 'react';
import { Input, Button, Checkbox } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

const DELETE_ARTWORK = gql`
       mutation ($artwork_id : uuid!) {
          delete_artwork_table_by_pk(id: $artwork_id) {
            id
          }
    }
    `;

export default function DeleteArtwork({ refetch, artwork, setSelectedArtwork }) {

    return (
        <Mutation
            mutation={DELETE_ARTWORK}
            variables={{artwork_id : artwork.id}}
            onCompleted={(e) => {
                refetch && refetch();
                setSelectedArtwork && setSelectedArtwork(null);
            }}
            onError={(e) => {
                alert(e);
            }}
        >
            {(MyMutation, { loading, error }) => {
                //if (loading) return null;

                return (
                    <Fragment>

                        <HighlightOffOutlinedIcon
                            style={{marginBottom : '5px'}}
                            id={'deleteArtwork'}
                            onClick={(e) => {
                                e.stopPropagation(); //stop card click event happening
                                MyMutation();

                            }}
                        >

                        </HighlightOffOutlinedIcon>

                    </Fragment>
                );
            }}
        </Mutation>
    );
}
