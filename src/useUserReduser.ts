import React, { useReducer } from "react";
interface IState {
  password: number;
  name: string;
}
const initState: IState = {
  password: 0,
  name: "user",
};
const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case "increase":
      return { ...state, password: state.password + 1 };
    case "change_name":
      return { ...state, name: action.nextName };
    default:
      return state;
  }
};
const useUserReduser = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return { state, dispatch };
};

export default useUserReduser;
