import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TechBucket } from "../../types/MaintenanceOptions";
import { fetchAllTechBucketsThunk } from "../thunks/maintenance/fetchAllTechBucketsThunk";

type MaintenanceState = {
  techBuckets: TechBucket[];
  error: string | null | unknown;
  isLoading: boolean;
};

const initialState: MaintenanceState = {
  techBuckets: [],
  error: null,
  isLoading: false,
};

const maintenanceSlice = createSlice({
  name: "techBucket",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    // Fetch all tech buckets
    addCase(fetchAllTechBucketsThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    addCase(
      fetchAllTechBucketsThunk.fulfilled,
      (state, action: PayloadAction<TechBucket[]>) => {
        state.isLoading = false;
        state.techBuckets = action.payload;
      }
    );
    addCase(
      fetchAllTechBucketsThunk.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export default maintenanceSlice.reducer;
