import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Mutation, Query} from "react-apollo";
import gql from "graphql-tag";
import _ from 'lodash';
import {UserContext} from "../../../providers/UserProvider";


const TAGS = gql`
 query {
  tags_table {
    tag
  }
}


`

;const INSERT = gql`
   mutation MyMutation($artwork_id : uuid!, $tag : String!) {
      insert_artwork_tags_table_one(object: {artwork_id : $artwork_id, tag : $tag}) {
        artwork_id
        tag
      }
}

`;

export default function ({selectedArtwork, refetch}) {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    //const tags = ['Space', 'Lines'];


    return (

        <Query query={TAGS} >
            {({ loading, error, data }) => {

                if (loading) return null;

                const tagsNotOnArtwork = _.differenceWith(data.tags_table, selectedArtwork.tags, (tagValue, tag) => tagValue.tag === tag.tag);

                if (tagsNotOnArtwork.length ===0) return null;

                return <Mutation
                    mutation={INSERT}
                    onCompleted={() => {refetch && refetch() && setValue(null)}}
                >
                    {(handleMutation, { loading, error }) => (

                        <FormControl >
                            <FormHelperText>Add tags</FormHelperText>
                            <Select
                                size={'small'}
                                value={value}
                                style={{  width: 120 }}
                                onChange={(e) => {
                                    //alert(e.target.value);
                                    handleMutation({variables : {artwork_id : selectedArtwork.id, tag : e.target.value}} )
                                }}
                            >

                                {tagsNotOnArtwork.map(tag => <MenuItem key={tag.tag} value={tag.tag}>{tag.tag}</MenuItem>)}

                            </Select>

                        </FormControl>
                    )}
                </Mutation>
                    }}
        </Query>

    );
}
