export const SETTOKEN = "ACCESSTOKEN/SETTOKEN" as const;
export const RESETTOKEN = "ACCESSTOKEN/RESETTOKEN" as const;

export const setToken = (token: string) => ({
  type: SETTOKEN,
  token,
});
export const resetToken = () => ({
  type: RESETTOKEN,
});

export type InitialStateType = {
  token: string | boolean;
};

const initialState: InitialStateType = {
  token: false,
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
        token: false,
      };
    default:
      return state;
  }
};
