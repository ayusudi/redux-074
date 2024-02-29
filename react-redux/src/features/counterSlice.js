import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 5
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: state => {
      state.count += 1
    },
    decremented: state => {
      state.count -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions
export default counterSlice.reducer