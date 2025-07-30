import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    //as we know that when the cart is clicked it dispatches an action and calls the reducer,so here addItem is the action and then there is a reducer function associated with that

    //dispatches an action and calls the reducer function
    reducers:{
        addItem : (state,action) => {   //here state refers to the initialState array
            state.items.push(action.payload)
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0; // []
        }
         
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
//this are by defualt we have to do in the same manner

export default cartSlice.reducer