import { createSlice } from "@reduxjs/toolkit";

// import Products from "./Products";
export const Slice = createSlice({
    name: "Slice",
    initialState: {
        cart:[],totale: 0
    },
    reducers: {
        addCart: (state, action) => {
        
                    const newCart = [...state.cart, action.payload]
                    const ss = state.totale + action.payload.price
                    return { ...state, cart: newCart, totale: ss }
    
        },

        lengthcart: (state, action) => {
            const len = state.cart.length
            return len
        },

        RemovCart: (state, action) => {

            const newcart=state.cart.filter(item=>item.id!==action.payload.id)
            const ss = state.totale - action.payload.price
            return {...state,cart:newcart,totale:ss}}
            , 
            setUserLoginDetails: (state, action) => {
                state.userinfo.name = action.payload.name;
                state.userinfo.email = action.payload.email;
                state.userinfo.photo = action.payload.photo;
              },
          


    }
})
export const { addCart, lengthcart, RemovCart,selecat,setUserLoginDetails,setSignOutState } = Slice.actions
export default Slice.reducer