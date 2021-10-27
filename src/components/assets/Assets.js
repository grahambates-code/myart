import { Box, Typography, Skeleton } from '@mui/material';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ArticleTemplate from 'templates/article-template/ArticleTemplate';
import AssetSelect from './asset-select/AssetSelect';

const ARTWORK_QUERY = gql`
    query AssetQuery {
        asset_table {
            id
            name
            type
            x
            y
            artwork_id
            created_on
            data
        }
    }
`;

const Assets = () => {
    return (
        <ArticleTemplate
            bgColor="black"
            content={
                <ArticleTemplate.Content title="Assets" bgColor="white">
                    <Query query={ARTWORK_QUERY}>
                        {({ loading, error, data }) => {
                            if (loading) {
                                return <Skeleton variant="rectangular" width="100%" height={200} />;
                            }
                            if (error) {
                                return <Typography color="red">{error.message}</Typography>;
                            }

                            const assets = data.asset_table;
                            return (
                                <Box>
                                    <AssetSelect assets={assets} onChange={(asset) => {
                                        console.log('selected asset', asset);
                                    }} />
                                </Box>
                            )
                        }}
                    </Query>
                </ArticleTemplate.Content>
            }
            side={
                <ArticleTemplate.Side>
                    <Box
                        color="white"
                        paddingX={3}
                        paddingTop={3}
                        paddingBottom={8}
                        display="flex"
                        justifyContent="center"
                    >
                        <Box>
                            <Typography variant="h5" component="p" color="inherit">
                                Productive
                            </Typography>
                            <Typography variant="h5" component="p" color="inherit">
                                Free and easy
                            </Typography>
                            <Typography variant="h5" component="p" color="inherit">
                                New
                            </Typography>
                        </Box>
                    </Box>
                    <Box padding={3} bgcolor="#f5f4f5" textAlign="center">
                        <img src="/example.png" alt="example" width="50%" height="auto" />
                        <Typography variant="h4">Productive</Typography>
                    </Box>
                </ArticleTemplate.Side>
            }
        />
    );
};

export default Assets;
