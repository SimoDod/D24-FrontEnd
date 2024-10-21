import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Segment } from "../../types/MaintenanceOptions";
import { fetchAllSegmentsThunk } from "../thunks/maintenance/fetchAllSegmentsThunk";
import { updateSegmentThunk } from "../thunks/maintenance/updateSegmentThunk";

type MaintenanceState = {
  segments: Segment[];
  error: string | null | unknown;
  isLoading: boolean;
};

const initialState: MaintenanceState = {
  segments: [],
  error: null,
  isLoading: false,
};

const maintenanceSlice = createSlice({
  name: "segment",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    // Fetch all segments
    addCase(fetchAllSegmentsThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    addCase(
      fetchAllSegmentsThunk.fulfilled,
      (state, action: PayloadAction<Segment[]>) => {
        state.isLoading = false;
        state.segments = action.payload;
      }
    );
    addCase(
      fetchAllSegmentsThunk.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );

    // Update segment tech buckets
    addCase(updateSegmentThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    addCase(
      updateSegmentThunk.fulfilled,
      (state, action: PayloadAction<Segment>) => {
        state.isLoading = false;
        const segmentIndex = state.segments.findIndex(
          ({ _id }) => action.payload._id === _id
        );

        state.segments[segmentIndex] = action.payload;
      }
    );
    addCase(
      updateSegmentThunk.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export default maintenanceSlice.reducer;