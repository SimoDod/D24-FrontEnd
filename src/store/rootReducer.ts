import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import notification from "./slices/notificationSlice";
import loader from "./slices/loaderSlice";

const rootReducer = combineReducers({ auth, notification, loader });

export default rootReducer;
