import { createTheme } from '@mui/material';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'unset',
                    borderRadius: 0
                }
            }
        }
    }
});

export default theme;
