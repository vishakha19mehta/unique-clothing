import React from 'react';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {selectCartItems} from '../../redux/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import CartIcon from '../cart-icon/cart-icon-component';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems, history }) => {
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                        <CartIcon />
                    </Button>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Box p={2}>
                            {
                                cartItems.length ? 
                                cartItems.map(cartItem => (
                                <div>
                                    <CartItem  key={cartItem.id} item={cartItem} />
                                    
                                </div>
                                 )) : <span>Your cart is empty</span>
                            }

                            <CustomButton
                                onClick={() => history.push('/checkout')}
                                variant="contained"
                                color="primary">GO TO CHECKOUT</CustomButton>
                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}

const mapStateToProp = createStructuredSelector 
({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProp)(CartDropdown));