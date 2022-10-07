import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [{ content: null, lastname: null, username: null, date: null, token: null }]
};

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    newTweet: (state, action) => {
        state.value.push({content: action.payload.content, lastname: action.payload.lastname, username: action.payload.username, date: action.payload.date, token: action.payload.token});
    },
    removeTweet: (state) => {
        state.value = [];
    },
  },
});

export const { newTweet, removeTweet } = tweetSlice.actions;
export default tweetSlice.reducer;