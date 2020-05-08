import CartActionTypes from './cart.type';

export const addItem = item =>
({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item =>
({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
});


export const descreaseItemFromCart = item =>
({
    type: CartActionTypes.DECREASE_ITEM_FROM_CART,
    payload: item
});
