export const ADDLIST = "MYLIST/ADDLIST" as const;
export const DELETELIST = "MYLIST/DELETELIST" as const;

export const addList = (list: dispatchType) => ({
  type: ADDLIST,
  list,
});
export const deleteList = (id: string) => ({
  type: DELETELIST,
  id,
});

export type dispatchType = {
  id: string;
  imgURL: string;
  name: string;
};

type InitalStateType = {
  list: dispatchType[];
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
      const res = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: res,
      };
    default:
      return state;
  }
};
