import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "../../localization/i18n";
import { AxiosError } from "axios";
import { api } from "../../api/api";
import { Report } from "../../components/NewReportForm/types";
import { routePaths } from "../../routerConfig";

export const fetchReportThunk = createAsyncThunk<
  Report,
  string,
  { rejectValue: string }
>("api/get-report", async (reportNumber, { rejectWithValue }) => {
  try {
    const response = await api.get(
      `${routePaths.learningReport.path}${reportNumber}`
    );

    return response?.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data.message);
    }

    return rejectWithValue(i18n.t("apiError.unknownError"));
  }
});
