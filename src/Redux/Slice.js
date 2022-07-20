import { createSlice } from "@reduxjs/toolkit";

// import Products from "./Products";
export const Slice = createSlice({
    name: "Slice",
    initialState: {
        cart:[],totale: 0
    },
    reducers: {
        addCart: (state, action) => {
            const itemIndex=state.cart.findIndex((item)=>item.Id === action.payload.Id);

              if(itemIndex>=0){
                state.cart[itemIndex].cartQuantity+=1;
             }else{
                const tempProduct={...action.payload, cartQuantity:1};
                state.cart.push(tempProduct);}
    
        },

        lengthcart: (state, action) => {
            const len = state.cart.length
            return len
        },

        RemovCart: (state, action) => {
            const itemIndex=state.cart.findIndex((item)=>item.Id === action.payload.Id);
            state.cart.splice(itemIndex, 1);


        },
        incre: (state, action) => {
            const itemIndex=state.cart.findIndex((item)=>item.Id === action.payload.Id);
            state.cart[itemIndex].cartQuantity+=1
        },
        dincre: (state, action) => {
            const itemIndex=state.cart.findIndex((item)=>item.Id === action.payload.Id);
            state.cart[itemIndex].cartQuantity-=1 

          
            
        }

          


    }
})
export const { addCart, lengthcart, RemovCart,incre,setUserLoginDetails,dincre } = Slice.actions
export default Slice.reducer






// addToCart(state,action){
    
   
                                               