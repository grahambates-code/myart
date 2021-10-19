import React, { Fragment, useContext } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import DashboardPage from 'pages/dashboard-page/';
import TermsPage from 'pages/terms-page/TermsPage';
import LoginPage from 'pages/login/login-page/LoginPage';
import PrivateRoute from './PrivateRoute';
import PrivateTermsRoute from './PrivateTermsRoute';
import PublicRoute from './PublicRoute';
import MainTemplate from 'templates/main-template/MainTemplate';

const Routes = () => {

    return (
        <Switch>
            <MainTemplate ignores={[]}>
                <PrivateRoute exact={true} path="/dashboard" component={DashboardPage} />
                <PublicRoute exact={true} path="/login" component={LoginPage} />
                <PrivateTermsRoute exact={true} path={'/terms'} component={TermsPage}/>
            </MainTemplate>
        </Switch>
    );
};

export default Routes;
