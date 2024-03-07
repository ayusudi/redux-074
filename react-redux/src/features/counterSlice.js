import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios' // pengganti fetch

const initialState = {
  count: 0,
  provinces: []
}

const URL = "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"

export const fetchProvinces = createAsyncThunk('counter/fetchProvinces', async () => {
  let response = await axios.get(URL)
  return response.data
})

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },                        // isi dari value itu action dan payload
    incrementByAmount: (state, value) => {
      state.count += Number(value.payload)
    },
    setProvinces: (state, value) => {
      state.provinces = value.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProvinces.fulfilled, (state, action) => {
        state.provinces.push(...action.payload)
      })
  }
})

export const { increment, decrement, incrementByAmount, setProvinces } = counterSlice.actions
export default counterSlice.reducer