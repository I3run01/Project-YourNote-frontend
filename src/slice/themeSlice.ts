import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
  isDark: boolean
}

const initialState: ThemeState = {
  isDark: true,
}

export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = counterSlice.actions

export default counterSlice.reducer