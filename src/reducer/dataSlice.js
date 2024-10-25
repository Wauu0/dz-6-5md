import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    items:[],
    filterItems:[],
}
export const fetchData  = createAsyncThunk(
    'data/fetchData',
    async () => {
        const response = await  fetch('https://jsonplaceholder.typicode.com/users')
        const data  = await response.json()
        return data
    }
)


const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
        filterData: (state, action) => {
            state.filterItems = state.items.filter(item =>
                item.name.toLowerCase().includes(action.payload.toLowerCase()));
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.items = action.payload;
            state.filterItems = action.payload;
        })
    }
})


export const {filterData} = dataSlice.actions;
export default dataSlice.reducer