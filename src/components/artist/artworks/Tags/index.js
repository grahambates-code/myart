import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DeleteTag from './DeleteTag'
import AddTag from './AddTag'
export default function Tags({selectedArtwork, refetch}) {



    return (
        <Stack direction="row" spacing={1}>
            {selectedArtwork.tags.map((tag, i) => <DeleteTag key={i} refetch={refetch} tag={tag}/>)}
            <AddTag selectedArtwork={selectedArtwork} refetch={refetch}/>
        </Stack>
    );
}
