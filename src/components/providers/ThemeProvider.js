import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

const theme = createTheme();

const useStyles = makeStyles((theme) => {
    root: {
        // some css that access to theme
    }
});

export default function App({children}) {
   // const classes = useStyles(); // ❌ If you have this, consider moving it inside a component that wrapped with <ThemeProvider>
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledEngineProvider>
    );
}
