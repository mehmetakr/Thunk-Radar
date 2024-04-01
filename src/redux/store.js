import { configureStore } from "@reduxjs/toolkit";
import flightslices from "../slices/flightslices";

 export default configureStore({reducer:flightslices});
