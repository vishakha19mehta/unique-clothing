import React from 'react';
import { clearItemFromCart, descreaseItemFromCart, addItem} from '../../redux/cart/cart.action'; 
import {connect} from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';

const CheckoutItem = ({cartItem, clearItem, addItem, descreaseItemFromCart}) =>
{
    const { name, imageUrl, price, quantity } = cartItem;
    return(
        <TableRow>
            <TableCell component="th" scope="row"><img src={imageUrl} style={{ width: '150px '}} alt={name}></img></TableCell>
            <TableCell component="th" scope="row" align="right">{name}</TableCell>
            <TableCell component="th" scope="row" align="right">
                <RemoveOutlinedIcon onClick={() => descreaseItemFromCart(cartItem)}/> {quantity} 
                <AddOutlinedIcon onClick={() => addItem(cartItem)}/></TableCell>
            <TableCell component="th" scope="row" align="right">${price}</TableCell>
            <TableCell component="th" scope="row" align="right" onClick={() => clearItem(cartItem)}><DeleteOutlineIcon /></TableCell>
        </TableRow>
    )
}

const mapsDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    descreaseItemFromCart: item => dispatch(descreaseItemFromCart(item))
});

export default connect(null, mapsDispatchToProps)(CheckoutItem);