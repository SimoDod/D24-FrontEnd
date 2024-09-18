import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { notification } from "antd";
import { fetchUserThunk } from "../thunks/fetchUserThunk";
import { loginThunk } from "../thunks/loginThunk";
import { registerThunk } from "../thunks/registerThunk";
import i18n from "../../localization/i18n";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {},
  reducers: {
    openMandatoryFieldsNotification: () => {
      notification.warning({
        message: i18n.t("notifications.allFieldsMandatory"),
        description: i18n.t("notifications.fillBeforeSubmit"),
      });
    },
  },
  extraReducers: ({ addMatcher }) => {
    addMatcher(
      isAnyOf(
        fetchUserThunk.rejected,
        loginThunk.rejected,
        registerThunk.rejected
      ),
      (_, action) => {
        notification.warning({ message: action.payload });
      }
    );
  },
});

export const { openMandatoryFieldsNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
