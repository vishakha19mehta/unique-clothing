import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import CollectionItem from '../collection-item/collection-item.component'; 
import { Container } from '@material-ui/core';

const CollectionPreview = ({title, items}) =>
(
    <Container>
        <Grid container direction="row">
            <Grid item xs={12} >
                <Typography variant="h3" component="h1">{title.toUpperCase()}</Typography>
            </Grid>
            {
                items.filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                <Grid item xs={12} md={3} lg={3} p={2}>
                    <CollectionItem key={id} {...otherItemProps}/>
                </Grid>
                ))
            }
        </Grid>
    </Container>
)

export default CollectionPreview;