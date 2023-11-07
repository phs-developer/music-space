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
// type SetListType = ReturnType<typeof addList> | ReturnType<typeof deleteList>;

// export const setList = (
//   state: initialStateType = initialState,
//   action: SetListType
// ) => {
//   switch (action.type) {
//     case ADDLIST:
//       return {
//         ...state,
//         list: [action.list, ...state.list],
//       };
//     case DELETELIST:
//       const res = state.list.filter((item) => item.track.id !== action.id);
//       return {
//         ...state,
//         list: res,
//       };
//     default:
//       return state;
//   }
// };
