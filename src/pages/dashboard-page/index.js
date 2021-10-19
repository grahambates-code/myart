import React, { useContext } from 'react';
import { UserContext } from 'components/providers/UserProvider';

const Dashboard = () => {

    const { user } = useContext(UserContext);

    if (!user) return <pre>Loading</pre>

    return (
        <div data-test-id={'Dashboard'}>


            <div>
                    artist dashboard
            </div>

        </div>

    );
};

export default Dashboard;
