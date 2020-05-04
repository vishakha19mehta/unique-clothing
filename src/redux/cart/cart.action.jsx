import CartActionTypes from './cart.type';

export const addItem = item =>
({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

