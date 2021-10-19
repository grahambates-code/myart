import React, { useContext, useState, Fragment } from 'react';
import { UserContext } from '../../providers/UserProvider';
import Grid from '@mui/material/Grid';
import {Query} from "react-apollo";
import gql from "graphql-tag";
import SVG from '../../common/SVG'
import {Button} from "@mui/material";
import AddArtwork from "../artworks/AddArtwork";
import SmallArtworkHolder from "./Holder/SmallArtworkHolder";

const ARTIST = gql`
    query ArtistAndArtwork {

      artist_table {
        id
        name
        created_at
        
        artworks {
          title
          type
          status
        }
      }
}

`;

const Artist = ({artist, setBigSideBar, setSelectedArtwork}) => {

    const { user, refetch } = useContext(UserContext);

    return <div>


        <div style={{backgroundColor : 'black', height: '200px', color : 'white'}}>
            <h3>Filter : Published/Unpublished</h3>
            <h3>Show stats : false</h3>
            <AddArtwork artist_id={artist.id} refetch={refetch} setBigSideBar={setBigSideBar}/>
        </div>

        <div>
            {user.artist && user.artist.artworks.map(aw =>  {

                if (aw.status === 'NEW') return <span>new</span>
                return <div onClick={() => setSelectedArtwork(aw)}><SmallArtworkHolder artist={artist}/></div>
            })}
        </div>

        <div style={{ backgroundColor : 'white', filter: 'grayscale(100%)', position : 'absolute', bottom : 0, left : 0}}>
            <img style={{ height : '100px', filter: 'grayscale(100%)'}} src={'/tom.jpeg'} />
            <h3 style={{float : 'right'}}>Tom Morgan Jones</h3>

            <a>Sign out </a>

        </div>


    </div>

    return (
        <div>

            <Query
                query={ARTIST}
                fetchPolicy={'network-only'}
                onError={() => alert('nope')}
            >
                {({ data, refetch, loading }) => {

                    if (!data || loading) return null;

                    return (
                        <Fragment>

                            <h1>My artworks</h1>

                            {JSON.stringify(data)}

                            <SVG/>

                            <div className="artistgrid">
                                <div>

                                </div>
                                <div><img
                                    src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/architectural-digest.png"
                                    alt=""/></div>
                                <div><img src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/architizer.png"
                                          alt=""/></div>
                                <div><img
                                    src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/car-and-driver.png"
                                    alt=""/></div>
                                <div><img
                                    src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/contemporist.png"
                                    alt=""/></div>
                                <div><img src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/dwell.png"
                                          alt=""/></div>
                                <div><img src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/houzz.png"
                                          alt=""/></div>
                                <div><img src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/hypebeast.png"
                                          alt=""/></div>
                                <div><img
                                    src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/interior-design.png"
                                    alt=""/></div>
                                <div><img
                                    src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/los-angeles-times.png"
                                    alt=""/></div>
                                <div><img
                                    src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/metropolitan-home.png"
                                    alt=""/></div>
                                <div><img
                                    src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/robb-report.png"
                                    alt=""/></div>
                                <div><img
                                    src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/sports-illustrated.png"
                                    alt=""/></div>
                                <div><img
                                    src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/sunset-magazine.png"
                                    alt=""/></div>
                                <div><img src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/trendir.png"
                                          alt=""/></div>
                                <div><img
                                    src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/unique-homes.png"
                                    alt=""/></div>
                                <div><img
                                    src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/wall-street-journal.png"
                                    alt=""/></div>
                                <div><img
                                    src="https://csstricks-images.s3.us-east-1.amazonaws.com/logos/western-art-and-architecture.png"
                                    alt=""/></div>
                            </div>

                        </Fragment>
                    );
                }}
            </Query>

        </div>
    );
};

export default Artist;
