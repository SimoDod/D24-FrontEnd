import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "../../localization/i18n";
import { AxiosError } from "axios";
import { api } from "../../api/api";
import { Report } from "../../components/NewReportForm/types";
import { routePaths } from "../../routerConfig";

export const fetchAllLearningReports = createAsyncThunk<
  Report[],
  void,
  { rejectValue: string }
>("api/get-all-reports", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${routePaths.learningReport.path}get/all`);

    return response?.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data.message);
    }

    return rejectWithValue(i18n.t("apiError.unknownError"));
  }
});
