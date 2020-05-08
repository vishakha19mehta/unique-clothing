import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

/* Table design api*/
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
/* Table design api*/

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const CheckOutPage = ({cartItems, total}) => {
const classes = useStyles();

    return (
        <Container>
            <Grid item xs={8}>
                <h1>CheckOut </h1>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table" align="center">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Remove</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                cartItems.map(cartItem =>
                                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                                )
                            }  
                            <TableRow>
                                <TableCell colSpan={3} align="right">Subtotal</TableCell>
                                <TableCell align="right">${total}</TableCell>
                            </TableRow>                             
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Container>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal 
});

export default connect(mapStateToProps)(CheckOutPage);