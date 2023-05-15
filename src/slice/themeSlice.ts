import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
  isDark: boolean
}

const initialState: ThemeState = {
  isDark: false,
}

export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDark ? state.isDark = false : state.isDark = true
    },
  },
})

export const { changeTheme } = counterSlice.actions

export default counterSlice.reducer