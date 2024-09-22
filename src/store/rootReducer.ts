import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import notification from "./slices/notificationSlice";
import loader from "./slices/loaderSlice";
import report from "./slices/reportSlice";

const rootReducer = combineReducers({ auth, notification, loader, report });

export default rootReducer;
