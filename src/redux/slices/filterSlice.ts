import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FilterSliceState {
  searchValue: string;
  city: string;
}

const initialState: FilterSliceState = {
  searchValue: '',
  city: 'all',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCities(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    clearFilters(state) {
      state.searchValue = '';
      state.city = 'all';
    },
  },
});

export const filterSelector = (state: RootState) => state.filter;

export const { setSearchValue, setCities, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;
