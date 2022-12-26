import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name: "userStore",
    initialState: {
      user:null,
      ActiveMenu:false,
     },
   
    reducers: {
          LoginA: (state,action) => {
         state.user=action.payload
        
          },
          Logout:(state,action) => {
            state.user=null;
          
           
             },
             getChannels:(state,action) => {
              state.Channels=action.payload
            
             
               }
               ,setActiveMenu:(state,action)=>{
                state.ActiveMenu=action.payload
               }
          

    }
})
export const {LoginA,Logout,getChannels,setActiveMenu} = Slice.actions
export default Slice.reducer