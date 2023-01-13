import React, {
  useEffect,
  useRef,
  useState,
  useReducer,
  createContext,
} from "react";
import SecondChild from "../second-child/second-child";
import ReducerContext from "../useAppContext";
import useNumber from "../useNumber";
import useUserReduser from "../useUserReduser";


const FirstChild = () => {
  const [number, setNumber] = useState<number>(0);

  const changeNumberGandler = () => {
    setNumber((prev) => prev + 1);

  };

  return (
    <>
      <h2 data-testid="h2">First</h2>
      <button onClick={changeNumberGandler} data-testid="button">
        Change state
      </button>
      <ReducerContext.Provider value={useUserReduser()}>
        <SecondChild />
      </ReducerContext.Provider>
    </>
  );
};

export default FirstChild;
