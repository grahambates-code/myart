import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { useState } from 'react';

const AssetSelect = ({ onChange, assets }) => {
    const [selectedAssetId, setSelectedAssetId] = useState('');

    return (
        <FormControl size="small" margin="dense" fullWidth={true}>
            <InputLabel shrink={true}>Select assets</InputLabel>
            <Select
                value={selectedAssetId}
                onChange={event => {
                    setSelectedAssetId(event.target.value);
                    const asset = assets.find(a => a.id === event.target.value);
                    onChange(asset);
                }}
                input={<OutlinedInput notched={true} label="Select assets" />}
            >
                <MenuItem value="">
                    NONE
                </MenuItem>
                {assets.map(asset => (
                    <MenuItem key={asset.id} value={asset.id}>
                        {asset.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default AssetSelect;
