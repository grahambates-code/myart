import {useState, useEffect, useCallback, useContext} from 'react';
import axios from 'axios';
import { Auth } from 'aws-amplify';

export function useGetUserRole({ session }) {
    const [userRole, setUserRole] = useState(null);

    const getUserRoleFromDB = useCallback(async (session) => {
        try {

            const accountId = JSON.parse(session.idToken.payload['https://hasura.io/jwt/claims'])['x-hasura-account-id'] || "11111111-1111-1111-1111-11111111";

            const response = await axios.get(`${process.env.REACT_APP_BASE_URI}/api/rest/get_role?id=${session?.accessToken?.payload?.sub}&account_id=${accountId}`,
            {
                headers: {
                    Authorization: `Bearer ${session?.idToken?.jwtToken}`,
                    'x-hasura-role' : 'account-user'
                },
            })
            const _userRole = response?.data?.role_table[0].user_role;
            //console.log(_userRole);
            setUserRole(_userRole);
        } catch (error) {
            setUserRole(null);
            await Auth.signOut();
        }
    }, []);
    useEffect(() => {
        if (session && session.isValid()) {
            getUserRoleFromDB(session);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

    return userRole;
}
