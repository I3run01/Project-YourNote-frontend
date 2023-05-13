import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  user: object
}

const initialState: AuthState = {
    user: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload
    },
  },
})

export const { changeUser } = userSlice.actions

export default userSlice.reducer