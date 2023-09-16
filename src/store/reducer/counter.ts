export const INCRESE = "COUNT/INCRESE" as const;
export const DECREASE = "COUNT/DECREASE" as const;

export const increseCount = () => ({
  type: INCRESE,
});
export const decreseCount = () => ({
  type: DECREASE,
});

type InitalStateType = {
  count: number;
};
const initalState: InitalStateType = {
  count: 0,
};

type CounterAction =
  | ReturnType<typeof increseCount>
  | ReturnType<typeof decreseCount>;

export const counter = (
  state: InitalStateType = initalState,
  action: CounterAction
) => {
  switch (action.type) {
    case INCRESE:
      return {
        // ...state,
        // count: action.count,
        count: state.count + 1,
      };
    case DECREASE:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
