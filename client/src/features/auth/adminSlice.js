import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import adminService from './adminService.js';

//Get user from localstrorage
const admin = JSON.parse(localStorage.getItem('admin'));

const initialState = {
    admin: admin ? admin : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:'',
}

//Register user
export const register = createAsyncThunk(
    'admin/Register', async (admin,thunkAPI) => {
        try {
            return await adminService.Register(admin)
        } catch (error) {
            const message = (
                error.response && 
                error.response.data &&
                error.response.data.message) ||
                error.message || error.toString()
                return thunkAPI.rejectWithValue(message);
        }
    }
)

//Login user
export const login = createAsyncThunk('admin/login', async(admin,thunkAPI) => {
    try {
        return await adminService.Login(admin)
    } catch (error) {
        const message = (
            error.response && 
            error.response.data &&
            error.response.data.message) ||
            error.message || error.toString()
            return thunkAPI.rejectWithValue(message);
    }
})

//delete user
export const deleted = createAsyncThunk('admin/delete', async(admin,thunkAPI) => {
    try {
        return await adminService.Login(admin)
    } catch (error) {
        const message = (
            error.response && 
            error.response.data &&
            error.response.data.message) ||
            error.message || error.toString()
            return thunkAPI.rejectWithValue(message);
    }
})

export const logout = createAsyncThunk('admin/logout', async() => {
    await adminService.Logout()
})

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.admin = action.payload
        })
        .addCase(register.rejected, (state,action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
            state.admin = null
        })
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state,action) => {
            state.isLoading = false
            state.isSuccess = true
            state.admin = action.payload
        })
        .addCase(login.rejected, (state,action) => {
            state.isLoading = false 
            state.isError = true 
            state.message = action.payload
            state.admin = null
        })

        .addCase(deleted.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleted.fulfilled, (state,action) => {
            state.isLoading = false
            state.isSuccess = true
            state.admin = action.payload
        })
        .addCase(deleted.rejected, (state,action) => {
            state.isLoading = false 
            state.isError = true 
            state.message = action.payload
            state.admin = null
        })

        .addCase(logout.fulfilled, (state) => {
            state.admin = null
        })
    }
})

export const {reset} = adminSlice.actions
export default adminSlice.reducer