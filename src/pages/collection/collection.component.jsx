import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import CollectionItem from '../../components/collection-item/collection-item.component';

import {selectCollection} from '../../redux/shop/shop.selector';

const CollectionPage = ({collection}) =>
{
   const {title, items} = collection;
    return(
    <Container>
        <Grid container direction="row">
            <Grid item xs={12} >
                <Typography variant="h3" component="h1">{title}</Typography>
            </Grid>
                {
                    items.map((item) => (
                            <Grid item xs={12} md={3} lg={3} p={2} key={item.id}>
                                <CollectionItem key={item.id} item={item} />
                            </Grid>
                    ))
                }
        </Grid>
    </Container>
    );
};

const mapStateToProps = (state, ownProps) => 
({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);