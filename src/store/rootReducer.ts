import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import notification from "./slices/notificationSlice";
import loader from "./slices/loaderSlice";
import report from "./slices/reportSlice";
import admins from "./slices/adminSlice";

const rootReducer = combineReducers({ auth, notification, loader, report, admins });

export default rootReducer;
