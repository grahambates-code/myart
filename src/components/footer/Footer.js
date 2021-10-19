import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import moment from 'moment';

const Footer = () => {
    return (
        <Box component="footer" textAlign="center" paddingY={1}>
            <Typography variant="caption" gutterBottom={true} component="p">
                © {moment().get('year')} MyArt.ink
            </Typography>
            <Box>

            </Box>
        </Box>
    );
};

export default Footer;
