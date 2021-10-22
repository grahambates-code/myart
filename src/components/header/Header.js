import React from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { common } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';

const useStyles = makeStyles(theme => ({
    app: {
        backgroundColor: common.black,
        color: common.white
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.app} position="static" elevation={0}>
            <Toolbar>
                <Grid container={true}>
                    <Grid item={true} xs={true} />
                    <Grid item={true} xs={12} sm={9}>
                        <Box display="flex" alignItems="center">
                            <IconButton color="inherit" size="small" sx={{ mr: 1 }}>
                                <SearchIcon />
                            </IconButton>
                            <IconButton color="inherit" size="small" sx={{ mr: 1 }}>
                                <AppsIcon />
                            </IconButton>
                            {/* <Box dis></Box> */}
                            <Box display="flex" flexGrow={1} justifyContent="flex-end">
                                <Button variant="text" size="small" color="inherit" sx={{ mr: 3 }}>
                                    Company
                                </Button>
                                <Button variant="text" size="small" color="inherit" sx={{ mr: 3 }}>
                                    Sign in
                                </Button>
                                <Button variant="contained" color="primary" size="small">
                                    Get started
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
