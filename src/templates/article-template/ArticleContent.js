import { Box, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ArticleContent = ({ title, onClickDetails, children, color, bgColor }) => {
    return (
        <Box height="100%" boxSizing="border-box" color={color} bgcolor={bgColor}>
            <Box display="flex" alignItems="center" justifyContent="space-between" color="inherit" padding={3}>
                <Box display="flex" alignItems="center" color="inherit">
                    <IconButton color="inherit" sx={{ mr: 1 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {title}
                    </Typography>
                </Box>
                <Button
                    variant="text"
                    color="inherit"
                    size="small"
                    endIcon={<ChevronRightIcon />}
                    onClick={onClickDetails}
                >
                    Check more process here
                </Button>
            </Box>
            <Box padding={3}>{children}</Box>
        </Box>
    );
};

export default ArticleContent;
