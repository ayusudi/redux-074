import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoginPending: false,
  isLoginSuccess: false,
  errorMessage: '',
  user: {}
}

function callLoginApi(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@login.com" && password === 'admin') {
        resolve({ email })
      } else {
        reject("Invalid email & password")
      }
    }, 3000)
  })
}

export const authLoginAPI = createAsyncThunk('auth/login', async ({ email, password }) => {
  try {
    const response = await callLoginApi(email, password)
    return response
  } catch (error) {
    throw (error)
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authLoginAPI.pending, (state) => {
        state.isLoginPending = true
        state.errorMessage = ''
      })
      .addCase(authLoginAPI.fulfilled, (state, action) => {
        const { email } = action.payload
        state.isLoginPending = false
        state.isLoginSuccess = true
        state.errorMessage = ''
        state.user = { email }
      })
      .addCase(authLoginAPI.rejected, (state, action) => {
        state.isLoginPending = false
        state.isLoginSuccess = false
        state.errorMessage = action.error.message
      })
  }
})

export default authSlice.reducer