import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { userType } from '../../types/user'

export interface userState {
  user: userType | null
}

const initialState: userState = {
    user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser: state => { console.log('fetchUser') },
    changeUser: (state, action: PayloadAction<userType>) => {
      state.user = action.payload
    },
  },
})

export const { changeUser, fetchUser } = userSlice.actions

export default userSlice.reducer