import { configureStore } from "@reduxjs/toolkit";
import CardReducer from'./CartSlice';
const AppStore=configureStore({
    reducer:{
        cart:CardReducer,
        
    }
});

export default AppStore