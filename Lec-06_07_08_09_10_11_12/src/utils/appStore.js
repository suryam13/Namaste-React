import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
//creating our store
const appStore = configureStore({
    reducer : {
        //this is the main reducer which consists of small reducers
        cart : cartReducer ,
        
    }
   
});


export default appStore
