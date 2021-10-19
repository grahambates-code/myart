import React, { useContext, useState, Fragment } from 'react';
import { ListItemAvatar, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HelpIcon from '@mui/icons-material/Help';
import { ReactComponent as UserBottomIcon } from 'assets/icons/sidebar.svg';
import UserIcon from './UserIcon/index'
import Chip from '@mui/material/Chip';
import './styles.scss';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AccountContext } from '../providers/AccountProvider';
import { UserContext } from '../providers/UserProvider';
import makeStyles from '@mui/styles/makeStyles';

//import UserIcon from './UserIcon'

const useStyles = makeStyles((theme) => ({

    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const Navigations = ({ signOut }) => {
    const { account } = useContext(AccountContext);
    const { user } = useContext(UserContext);
    const location = useLocation();

    const classes = useStyles();

    const [path, setPath] = useState(location.pathname);

    const navigation = useHistory();

    const handleChangeItem = (path) => () => {
        setPath(path);
        navigation.push(path);
    };

    const isItemSelected = (selectedPath) => path === selectedPath;


    return (
        <Box width="100%" height="100%">
            <Box className="navigation">
                <List component="div" className="navigation-wrapper navigation-child-wrapper">
                    {true && (

                        <Fragment>
                        <ListItem
                            className="navigation-item navigation-item-child-wrapper"
                            classes={{ selected: 'navigation-item-selected' }}
                            button={true}
                            selected={isItemSelected('/onboarding')}
                            onClick={handleChangeItem('/onboarding')}
                        >
                            <ListItemAvatar>
                                <AccountBalanceWalletOutlinedIcon />
                            </ListItemAvatar>
                            <ListItemText className="navigation-item-text" primary="Onboarding" />


                        </ListItem>



                        </Fragment>
                    )}

                </List>

                <Box color="white" height="100%" display="flex" justifyContent="space-between" flexDirection="column">
                    <Box padding={1} marginBottom={2} component="small">
                    </Box>

                    <Box marginY={-1}>


                        {/*<UserIcon admin={isAccountAdmin} superadmin={isSuperAdmin} username={user?.UserName.split('@')[0]}/>*/}

                        {/*{account && (*/}
                        {/*    <Fragment>*/}
                        {/*        <Chip label={account.name} variant="default" style={{ width: '250px' }} />*/}
                        {/*    </Fragment>*/}
                        {/*)}*/}

                        {/*{!account && (*/}
                        {/*    <Fragment>*/}
                        {/*        <Chip label={'Distro Energy'} variant="default" />*/}
                        {/*    </Fragment>*/}
                        {/*)}*/}

                        {/*<List>*/}
                        {/*    <ListItem button={true} className="navigation-item-signout">*/}
                        {/*        <ListItemIcon>*/}
                        {/*            <HelpIcon color="secondary" />*/}
                        {/*        </ListItemIcon>*/}
                        {/*        <ListItemText primary="Guide" />*/}
                        {/*    </ListItem>*/}

                        {/*    <ListItem button={true} onClick={signOut} className="navigation-item-signout">*/}
                        {/*        <ListItemIcon>*/}
                        {/*            <PowerSettingsNewOutlinedIcon color="secondary" />*/}
                        {/*        </ListItemIcon>*/}
                        {/*        <ListItemText primary="Sign Out" />*/}
                        {/*    </ListItem>*/}
                        {/*</List>*/}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Navigations;
