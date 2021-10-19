import React, {useContext, useEffect, useState} from 'react';
import {  Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import {UserContext}                from "../../components/providers/UserProvider";

//remember user terms are stored in role table because we dont have a user table
const TermsPage = () => {

    const history = useHistory();

    const [ locationKeys, setLocationKeys ] = useState([])

    const { user, refetch: userRefetch }    = useContext(UserContext);

    // if (true && account) {
    //     if (superAdmin) history.push('/admin/accounts');
    // }

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            You must agree to these terms as an artist

            {JSON.stringify(user)}
        </Box>
    );
};

export default TermsPage;
