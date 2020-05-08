
import CartActionTypes from './cart.type';
import { addItemTocart, decreaseItemFromCart} from './cart.utils';

const INITIAL_STATE = ({
    cartItems: []
});

const cartReducer = (state = INITIAL_STATE, action) => 
{
   switch (action.type) {
       case CartActionTypes.ADD_ITEM:
           return{
               ...state, 
               cartItems: addItemTocart(state.cartItems, action.payload)
           };

       case CartActionTypes.REMOVE_ITEM_FROM_CART:
       return{
            ...state,
            cartItems: state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id)
       };

       case CartActionTypes.DECREASE_ITEM_FROM_CART:
       return{
            ...state,
           cartItems: decreaseItemFromCart(state.cartItems, action.payload, )
       };
   
       default:
           return state;
   }
}

export default cartReducer;