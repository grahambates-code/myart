import { Grid, Box } from '@mui/material';
import ArticleContent from './ArticleContent';
import ArticleSide from './ArticleSide';

const ArticleTemplate = ({ bgColor, content, side }) => {
    return (
        <Box bgcolor={bgColor}>
            <Grid container={true}>
                <Grid item={true} xs={12} sm={true}>
                    {side}
                </Grid>
                <Grid item={true} xs={12} sm={9}>
                    {content}
                </Grid>
            </Grid>
        </Box>
    );
};

ArticleTemplate.Content = ArticleContent;
ArticleTemplate.Side = ArticleSide;

export default ArticleTemplate;
