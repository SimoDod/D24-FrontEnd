import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { api } from "../../../api/api";
import i18n from "../../../localization/i18n";
import { routePaths } from "../../../routerConfig";
import { Report } from "../../../components/NewReportForm/types";

export const postReportThunk = createAsyncThunk<
  Report,
  Report & { userId: string | undefined },
  { rejectValue: string }
>("api/submit-report", async (valuesWithUpdatedStatus, { rejectWithValue }) => {
  try {
    const reportId = valuesWithUpdatedStatus._id;
    const isUpdate = Boolean(reportId);

    const method = isUpdate ? "put" : "post";
    const url = `${routePaths.learningReport.path}${isUpdate ? reportId : "submit"}`;

    const response = await api({
      method,
      url,
      data: valuesWithUpdatedStatus,
    });

    return response?.data;
  } catch (error) {
    if(error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.details.join(", "));
    }

    return rejectWithValue(i18n.t("apiError.unknownError"));
  }
});
