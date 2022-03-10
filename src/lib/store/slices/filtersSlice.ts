import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Filters {
  methods: Array<string>;
  materials: Array<string>;
  toggleOn: boolean;
}

const initialState: Filters = {
  methods: [],
  materials: [],
  toggleOn: false,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterMethods: (
      state,
      action: PayloadAction<{ val: string; checked: boolean }>
    ) => {
      if (action.payload.checked) {
        state.methods = [...state.methods, action.payload.val];
      } else {
        const updatedMethods = state.methods.filter(
          (el) => el !== action.payload.val
        );
        state.methods = updatedMethods;
      }
    },
    filterMaterials: (
      state,
      action: PayloadAction<{ val: string; checked: boolean }>
    ) => {
      if (action.payload.checked) {
        state.materials = [...state.materials, action.payload.val];
      } else {
        const updatedMaterials = state.materials.filter(
          (el) => el !== action.payload.val
        );
        state.materials = updatedMaterials;
      }
    },
    toggle: (state, action: PayloadAction) => {
      state.toggleOn = !state.toggleOn;
    },
    resetFilters: (state, action: PayloadAction) => ({
      ...initialState,
    }),
  },
});

export const { filterMethods, filterMaterials, toggle, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
