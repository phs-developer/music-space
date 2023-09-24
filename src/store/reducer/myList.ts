export const ADDLIST = "MYLIST/ADDLIST" as const;
export const DELETELIST = "MYLIST/DELETELIST" as const;

export const addList = (list: dispatchType) => ({
  type: ADDLIST,
  list,
});
export const deleteList = (list: dispatchType) => ({
  type: DELETELIST,
  list,
});

export type dispatchType = {
  id: string;
  imgURL: string;
  name: string;
};

type InitalStateType = {
  list: {
    id: string;
    imgURL: string;
    name: string;
  }[];
};

type SetListType = ReturnType<typeof addList> | ReturnType<typeof deleteList>;

const initalState: InitalStateType = {
  list: [
    {
      id: "",
      imgURL: "",
      name: "",
    },
  ],
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
      return {
        ...state,
        list: [action.list, ...state.list],
      };
    default:
      return state;
  }
};
