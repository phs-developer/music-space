export const SETTOKEN = "ACCESSTOKEN/SETTOKEN" as const;

export const setToken = (token: string) => ({
  type: SETTOKEN,
  token,
});

type InitialStateType = {
  token: string;
};

const initialState: InitialStateType = {
  token: "",
};

type ActionType = ReturnType<typeof setToken>;
export const setAccessToken = (
  state: InitialStateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case SETTOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
