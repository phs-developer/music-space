import { createSlice } from "@reduxjs/toolkit";

export type CurrentItemType = {
  track: {
    album: {
      images: {
        url: string;
      }[];
      release_date: string;
    };
    artists: {
      name: string;
    }[];
    id: string;
    name: string;
    uri: string;
  };
};

type initialStateType = {
  list: CurrentItemType[];
};

const initialState: initialStateType = {
  list: [],
};

const myListSlice = createSlice({
  name: "myList",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    deleteList: (state, action) => {
      const res = state.list.filter((item) => item.track.id !== action.payload);
      state.list = res;
    },
  },
});

export default myListSlice;
export const { addList, deleteList } = myListSlice.actions;
