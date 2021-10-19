import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes/Routes';
import SettingsProvider from 'components/providers/SettingsProvider';
import UserProvider from 'components/providers/UserProvider';
import ApolloProvider from 'components/providers/ApolloProvider';
import ThemeProvider from 'components/providers/ThemeProvider';
import mainTheme from 'themes/main.theme';
import i18n from 'services/i18n.service';
import UserAuthenticationProvider from 'components/providers/UserAuthenticationProvider';

const App = () => {
    return (
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>
                <SettingsProvider>
                    <StyledEngineProvider injectFirst>
                        <ThemeProvider theme={mainTheme}>
                            <UserAuthenticationProvider>
                                <ApolloProvider>
                                    <UserProvider>
                                            <Routes />
                                    </UserProvider>
                                </ApolloProvider>
                            </UserAuthenticationProvider>
                        </ThemeProvider>
                    </StyledEngineProvider>
                </SettingsProvider>
            </I18nextProvider>
        </BrowserRouter>
    );
};

export default App;
