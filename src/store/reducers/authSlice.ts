// // src/features/auth/authSlice.ts
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// interface AuthState {
//   user: any;
//   token: string | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: null,
//   loading: false,
//   error: null,
// };

// export const login = createAsyncThunk(
//   'auth/login',
//   async ({ username, password }: { username: string; password: string }) => {
//     const response = await axios.post('/api/login', { username, password });
//     return response.data;
//   }
// );

// export const register = createAsyncThunk(
//   'auth/register',
//   async ({ username, password }: { username: string; password: string }) => {
//     const response = await axios.post('/api/register', { username, password });
//     return response.data;
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Login failed';
//       })
//       .addCase(register.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Registration failed';
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
