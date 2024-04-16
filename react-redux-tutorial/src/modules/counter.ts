const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;

export const increase = () => {
  return { type: INCREASE };
};

export const decrease = () => {
  return { type: DECREASE };
};

type Actions = ReturnType<typeof increase> | ReturnType<typeof decrease>;

const initialState = {
  number: 0,
};

const counter = (state = initialState, action: Actions) => {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
