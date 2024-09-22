import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reportInitialValues } from "../../components/NewReportForm/formConfig";
import { Report } from "../../components/NewReportForm/types";
import { fetchReportThunk } from "../thunks/fetchReportThunk";
import { postReportThunk } from "../thunks/postReportThunk";
import { fetchAllLearningReports } from "../thunks/fetchAllLearningReports";

type ReportState = {
  report: Report;
  allReports: Report[];
  error: string | null | unknown;
  isLoading: boolean;
};

const initialState: ReportState = {
  report: reportInitialValues,
  allReports: [],
  error: null,
  isLoading: false,
};

const reportSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetReport: (state) => {
      state.report = reportInitialValues;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchReportThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    addCase(
      fetchReportThunk.fulfilled,
      (state, action: PayloadAction<Report>) => {
        state.isLoading = false;
        state.report = action.payload;
      }
    );
    addCase(
      fetchReportThunk.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );

    addCase(postReportThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    addCase(
      postReportThunk.fulfilled,
      (state, action: PayloadAction<Report>) => {
        state.isLoading = false;
        state.report = action.payload;
      }
    );
    addCase(
      postReportThunk.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );

    addCase(fetchAllLearningReports.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    addCase(
      fetchAllLearningReports.fulfilled,
      (state, action: PayloadAction<Report[]>) => {
        state.isLoading = false;
        state.allReports = action.payload;
      }
    );
    addCase(
      fetchAllLearningReports.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { resetReport } = reportSlice.actions;
export default reportSlice.reducer;
