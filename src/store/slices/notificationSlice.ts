import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { message, notification } from "antd";
import { fetchUserThunk } from "../thunks/auth/fetchUserThunk";
import { loginThunk } from "../thunks/auth/loginThunk";
import { registerThunk } from "../thunks/auth/registerThunk";
import i18n from "../../localization/i18n";
import { fetchAllLearningReports } from "../thunks/report/fetchAllLearningReports";
import { postReportThunk } from "../thunks/report/postReportThunk";
import { fetchReportThunk } from "../thunks/report/fetchReportThunk";
import { fetchAllOfficesThunk } from "../thunks/maintenance/fetchAllOfficesThunk";
import { fetchAllSegmentsThunk } from "../thunks/maintenance/fetchAllSegmentsThunk";
import { fetchAllTechBucketsThunk } from "../thunks/maintenance/fetchAllTechBucketsThunk";
import { createOfficeThunk } from "../thunks/maintenance/createOfficeThunk";
import { updateOfficeNameThunk } from "../thunks/maintenance/updateOfficeNameThunk";
import { deleteOfficeThunk } from "../thunks/maintenance/deleteOfficeThunk";

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
        fetchAllLearningReports.rejected,
        fetchAllOfficesThunk.rejected,
        fetchAllSegmentsThunk.rejected,
        fetchAllTechBucketsThunk.rejected,
        createOfficeThunk.rejected,
        updateOfficeNameThunk.rejected,
        deleteOfficeThunk.rejected
      ),
      (_, action) => {
        message.warning(action.payload);
      }
    );
  },
});

export const { openMandatoryFieldsNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
