import React from 'react';
import { Card, makeStyles, Button } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

export default function CarouselSlide({content}) {
    const { backgroundColor, title } = content;

    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor,
            padding: '0px 0px',
            margin: '0px 0px',
            width: '400px',
            display: 'flex',
            justifyContent: 'center',
        },
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <img src={content.src} style={{width : 'auto', height : '500px'}}/>
                {content.text}
            </CardContent>
        </Card>
    );
}
