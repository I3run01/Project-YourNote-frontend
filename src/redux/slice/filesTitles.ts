import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface File {
  title: string
  _id: string
}

export interface ChangeTitlePayload {
  _id: string;
  newTitle: string;
}

export interface changeSpecTitlePayload {
  _id: string;
}

export interface FilesState {
  files: File[]
  specTitle: string
}

const initialState: FilesState = {
    files: [],
    specTitle: ''
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
    },
    changeSpecTitle: (state, action: PayloadAction<changeSpecTitlePayload>) => {
      const { _id } = action.payload;
      const file = state.files.find(file => file._id === _id);
      if (file) {
        state.specTitle = file.title;
      }
    }
  },
})

export const { changeFilesTitles, deleteFileInTheList, changeFileTitle, changeSpecTitle } = filesSlice.actions

export default filesSlice.reducer
