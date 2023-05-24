import { createSlice } from '@reduxjs/toolkit'
import { filesType, ParagraphContent,IDEContent } from '../../types/files'
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

    updateContentText: (state, action: PayloadAction<{ index: number; newText: string }>) => {
      const { index, newText } = action.payload;
      const file = state.data;

      if (file) {
        const contentItem = file.content[index];

        if (contentItem && contentItem.type === 'paragraph') {
          (contentItem as ParagraphContent).text = newText;
        }
      }
    },

    updateContentCode: (state, action: PayloadAction<{ index: number; newCode: string }>) => {
      const { index, newCode } = action.payload;
      const file = state.data;

      if (file) {
        const contentItem = file.content[index];

        if (contentItem && contentItem.type === 'IDE') {
          (contentItem as IDEContent).code = newCode;
        }
      }
    },
  },
});

export const { setFile, updateContentText, updateContentCode } = fileSlice.actions

export default fileSlice.reducer