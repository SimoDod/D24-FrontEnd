import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { message, notification } from "antd";
import { fetchUserThunk } from "../thunks/fetchUserThunk";
import { loginThunk } from "../thunks/loginThunk";
import { registerThunk } from "../thunks/registerThunk";
import i18n from "../../localization/i18n";
import { postReportThunk } from "../thunks/postReportThunk";
import { fetchReportThunk } from "../thunks/fetchReportThunk";
import { fetchAllLearningReports } from "../thunks/fetchAllLearningReports";

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
        registerThunk.rejected,
        postReportThunk.rejected,
        fetchReportThunk.rejected,
        fetchAllLearningReports.rejected
      ),
      (_, action) => {
        message.warning(action.payload);
      }
    );
  },
});

export const { openMandatoryFieldsNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
