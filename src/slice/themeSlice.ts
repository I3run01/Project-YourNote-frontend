import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
  value: string
}

const initialState: ThemeState = {
    value: 'light',
}

export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = counterSlice.actions

export default counterSlice.reducer