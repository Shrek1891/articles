import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {INews} from "../../types/article";


export  const loadArticleById = createAsyncThunk(
    '@@details/load-article-by-id',
    // @ts-ignore
    (id, {extra : {client, api}}) => {
        return client.get(api.searchByCountry(id));
    }
)

interface IState {
    currentArticle: INews[] ;
    status: string;
    error: string | null;

}

const initialState:IState = {
    currentArticle : [],
    status: 'idle',
    error: null
}

const detailSlice = createSlice({
    name: '@@details',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadArticleById.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadArticleById.rejected, (state, action) => {
                state.status = 'rejected';
                // @ts-ignore
                state.error = action.payload || action.meta.error;

            })
            .addCase(loadArticleById.fulfilled, (state, action) => {
                state.status = 'received';
                state.currentArticle = action.payload.data;
            })

    }
});

export const detailReducer = detailSlice.reducer;
export const selectArticle =(state:any) => state.detailReducer.currentArticle;