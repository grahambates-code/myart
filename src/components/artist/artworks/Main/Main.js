import React from 'react';
import Tags from './../Tags';
import DeleteArtwork from './DeleteArt';
import AddAsset from './AddAsset';
import AssetsPreview from './AssetsPreview';
import Slider from './../Slider';
import { Button } from '@mui/material';
import Movable from './../../../widgets/movable';
import AddArtwork from '../AddArtwork';

export default ({ setSelectedArtwork, selectedArtwork, refetch }) => (
    <div>
        <div className="">
            <DeleteArtwork setSelectedArtwork={setSelectedArtwork} artwork={selectedArtwork} refetch={refetch} />

            <AddAsset artwork={selectedArtwork} refetch={refetch} />

            <AssetsPreview artwork={selectedArtwork} />

            <Movable refetch={refetch} asset={selectedArtwork.assets[0]} />

            {/*<Slider/>*/}

            {/*<Tags selectedArtwork={selectedArtwork} refetch={refetch}/>*/}
            {/*<br/>*/}

            {/*<h2 contentEditable={true}>enter a title here   <Button variant={'outlined'}> Publish </Button> </h2>*/}
        </div>
    </div>
);
