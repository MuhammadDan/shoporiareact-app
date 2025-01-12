import { configureStore } from "@reduxjs/toolkit";
import Cardreducer from "../Store/reducers/Cardreducer";
export const store = configureStore({
    reducer:{
        Cardreducer: Cardreducer
    }
})