import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IState {
   list: any[] ;
   status: string;
   error: string | null;
    search : any [] ;
    initialList: any ;
}

const initialState:IState = {
    status: 'idle',
    error: null,
    list: [],
    search: [],
    initialList: []
}


export const loadArticles = createAsyncThunk<any>(
    '@@articles/load-articles',
    async (_, {
        // @ts-ignore
        extra: {client, api}
    }) => {
        return client.get(api.BASE_URL);
    }
);
const articlesSlice = createSlice({
    name: '@@articles',
    initialState,
    reducers: {
        setSearch: (state, action:PayloadAction<String>) => {
            state.search = action.payload.split(" ");
        },
        setClear: (state) => {
            state.list = state.initialList;
        },
        setHighlight: (state, action) => {
            state.search.forEach((filter) => {
                if (filter) {
                    state.list.forEach((el, index) => {
                        let reg = new RegExp("(<=\\s|\\b)" + filter + "(?=[.]\\b|\\s|$)", 'ig');
                        let matchValue = el.title.match(reg);
                        if (matchValue) {
                            state.list[index].title = el.title.replace(reg, (reg:string) => `<span class="highLight">${reg}</span>`);
                        }
                        let matchValueDescr = el.summary.match(reg);
                        if (matchValueDescr) {
                            state.list[index].summary = el.summary.replace(reg, (reg:string) => `<span class="highLight">${reg}</span>`);
                        }
                    })
                }
            })
            state.list.forEach((el, index) => {
                state.list[index].titleNum = el.title.split("highLight").length - 1;
                state.list[index].descNum = el.summary.split("highLight").length - 1;
            });
            const res = state.list.filter((el) => {
                return (el.titleNum > 0 || el.descNum > 0);
            })
            const arrayFiltered = res.sort((first, second ) => second.titleNum - first.titleNum || second.descNum  - first.descNum );
            state.list = [...arrayFiltered];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadArticles.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadArticles.rejected, (state, action) => {
                state.status = 'rejected';
                // @ts-ignore
                state.error = action.payload ;
            })
            .addCase(loadArticles.fulfilled, (state, action) => {
                state.status = 'received';
                state.list = action.payload.data;
                state.list.map((el, index) => {
                    state.list[index].summary = state.list[index].summary.slice(0, 100) + " ...";
                    state.list[index].titleNum = 0;
                    state.list[index].descNum = 0;
                    return state.list;
                })
                state.initialList = [...state.list];
            })

    }
})

export const articlesReducer = articlesSlice.reducer;
export const {setSearch, setHighlight, setClear} = articlesSlice.actions;
export const allArticles = (state: any) => state.articlesReducer.list;
export const selectSearch = (state: any) => state.articlesReducer.search;
export const getCounter = (state: any) => state.articlesReducer.list.length;

