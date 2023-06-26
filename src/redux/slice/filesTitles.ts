import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface File {
  title: string
  _id: string
}

export interface ChangeTitlePayload {
  _id: string;
  newTitle: string;
}

export interface FilesState {
  files: File[]
}

const initialState: FilesState = {
    files: [],
}

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    changeFilesTitles: (state, action: PayloadAction<File[]>) => {
      state.files = action.payload
    },
    deleteFileInTheList: (state, action: PayloadAction<string>) => {
      state.files = state.files.filter(file => file._id !== action.payload);
    },
    changeFileTitle: (state, action: PayloadAction<ChangeTitlePayload>) => {
      const { _id, newTitle } = action.payload;
      const index = state.files.findIndex(file => file._id === _id);
      if (index !== -1) {
        state.files[index].title = newTitle;
      }
    }
  },
})

export const { changeFilesTitles, deleteFileInTheList, changeFileTitle } = filesSlice.actions

export default filesSlice.reducer
