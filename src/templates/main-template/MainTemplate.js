import React, { useContext, useState } from 'react';
import { Box, Container } from '@mui/material';
import classNames from 'classnames';
import './styles.scss';
import { UserAuthenticationContext } from 'components/providers/UserAuthenticationProvider';
import { useLocation } from 'react-router-dom';
import Footer from 'components/footer/Footer';
import Artist from "../../components/artist/sidebar";
import {UserContext} from "../../components/providers/UserProvider";
import Main from "../../components/artist/artworks/Main/Main";

const MainTemplate = ({ children, ignores }) => {
    const { isLoggedIn } = useContext(UserAuthenticationContext);
    const { user, refetch } = useContext(UserContext);
    const { pathname } = useLocation();
    const [bigSideBar, setBigSideBar] = useState(false);
    const [selectedArtwork, setSelectedArtwork] = useState(null);

    if (!user) return <span>loading</span>
    return (
        <Box className="template">
            <Box
                className={classNames('template-left', {
                    'template-left--out': isLoggedIn && !ignores.includes(pathname),
                    'template-left--out--out' : bigSideBar
                })}
            >

                    {user && user.artist && <Artist setSelectedArtwork={setSelectedArtwork} artist={user.artist} setBigSideBar={setBigSideBar}/> }

            </Box>

            <Box className="template-right">

                <Box overflow="auto" flex="1" maxHeight="100vh" height="100vh">
                    <Container style={{ height: '100%' }}>
                        <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
                            <Box paddingY={5}>
                                {selectedArtwork && <Main refetch={refetch} setSelectedArtwork={setSelectedArtwork} selectedArtwork={user.artist.artworks.find(aw => aw.id === selectedArtwork.id)} artist={user.artist}/> }
                            </Box>
                            <Footer />
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

export default MainTemplate;
