export const SETTOKEN = "ACCESSTOKEN/SETTOKEN" as const;
export const RESETTOKEN = "ACCESSTOKEN/RESETTOKEN" as const;

export type tokenObj = {
  number: string;
  name: string;
  time: number;
};

export const setToken = (token: tokenObj) => ({
  type: SETTOKEN,
  token,
});
export const resetToken = () => ({
  type: RESETTOKEN,
});

export type InitialStateType = {
  token: tokenObj | null;
};

const initialState: InitialStateType = {
  token: null,
};

type ActionType = ReturnType<typeof setToken> | ReturnType<typeof resetToken>;
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
    case RESETTOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
