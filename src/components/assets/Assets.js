import { Box, Typography } from '@mui/material';

import ArticleTemplate from 'templates/article-template/ArticleTemplate';

const News = () => {
    return (
        <ArticleTemplate
            bgColor="black"
            content={
                <ArticleTemplate.Content title="Assets" bgColor="white">
                    Content Assets
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

export default News;
