import { Box } from '@mui/material'

const AssetEditor = ({ asset, onSave }) => {
    return (
        <Box>
            {JSON.stringify(asset)}
        </Box>
    )
};

export default AssetEditor;