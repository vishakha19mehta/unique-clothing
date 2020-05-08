import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const CartItem = ({item: {imageUrl, price, name, quantity}}) =>
(
    <Grid container direction="row">
        <Grid item xs={5} >
            <img src={imageUrl} style={{ width: '50px' }} alt={name}></img>
        </Grid>
        <Grid item xs={7}>
            <Typography variant="h6" component="h6">{name}</Typography>
                <span>{quantity} x {price}</span>
        </Grid>
    </Grid>
);

export default CartItem;