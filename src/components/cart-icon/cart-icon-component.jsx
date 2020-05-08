import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import { selectCartItemsCount} from '../../redux/cart/cart.selector';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const CartIcon = ({itemCount}) => {
    return ( 
        <StyledBadge badgeContent={itemCount} color="secondary">
            <ShoppingCartIcon />
        </StyledBadge>
    );
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});


export default connect(mapStateToProps)(CartIcon);
