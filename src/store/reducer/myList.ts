export const ADDLIST = "MYLIST/ADDLIST" as const;
export const DELETELIST = "MYLIST/DELETELIST" as const;

export const addList = (list: CurrentItemType) => ({
  type: ADDLIST,
  list,
});
export const deleteList = (id: string) => ({
  type: DELETELIST,
  id,
});

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

type InitalStateType = {
  list: CurrentItemType[];
};

type SetListType = ReturnType<typeof addList> | ReturnType<typeof deleteList>;

const initalState: InitalStateType = {
  list: [],
};

export const setList = (
  state: InitalStateType = initalState,
  action: SetListType
) => {
  switch (action.type) {
    case ADDLIST:
      return {
        ...state,
        list: [action.list, ...state.list],
      };
    case DELETELIST:
      const res = state.list.filter((item) => item.track.id !== action.id);
      return {
        ...state,
        list: res,
      };
    default:
      return state;
  }
};
