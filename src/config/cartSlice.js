import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
initialState:{
    items:[],
   }, 
reducers:{
    addItem:(state,action) =>{
        //mutating the state over here 
    state.items.push(action.payload);
    },
    removeItem:(state,action) =>{
        state.items.splice(action.payload,1);
    },
    clearCart:(state,action) =>{
        state.items.length=0;
       // either mutate the existing state or return a new state 
       //return {items:[]};
    },
},
});
export const {addItem,removeItem, clearCart}=cartSlice.actions;
export default cartSlice.reducer;