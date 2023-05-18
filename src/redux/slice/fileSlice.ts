import { createSlice } from '@reduxjs/toolkit'
import { filesType } from '../../types/files'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FileState {
  data: filesType | null
}

const initialState: FileState = {
  data: null,
}

export const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setFile: (state, action: PayloadAction<filesType | null>) => {
      state.data = action.payload;
    },
  },
});

export const { setFile } = fileSlice.actions

export default fileSlice.reducer