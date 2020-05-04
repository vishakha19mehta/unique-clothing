
import CartActionTypes from './cart.type';
import { addItemTocart} from './cart.utils';

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
   
       default:
           return state;
   }
}

export default cartReducer;