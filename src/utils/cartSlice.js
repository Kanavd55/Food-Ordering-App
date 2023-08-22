import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            let ItemId=action.payload.card.info.id;
            const index=state.items.findIndex((x)=>x.card.info.id==ItemId);
            state.items.splice(index,index+1);
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        }
    }
});

export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;