import { getSubreddits } from '../api/reddit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subreddits: [],
    error: false,
    isLoading: false,
};

const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        initialSubreddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubredditsSuccess(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        getSubredditsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
    },
});

export const {
    getSubredditsFailed,
    getsubredditsSuccess,
    startGetSubreddits,
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

//thunk
export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(startGetSubreddits());
        const subreddits = await getSubreddits();
        dispatch(getSubredditsSuccess(subreddits));
    } catch (error) {
        dispatch(getSubredditsFailed());
    }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;