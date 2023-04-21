import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  value: boolean
}

const initialState: AuthState = {
    value: false,
}

export const counterSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    changeAuth: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeAuth } = counterSlice.actions

export default counterSlice.reducer