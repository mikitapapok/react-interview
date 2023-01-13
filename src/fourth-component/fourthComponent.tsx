import React, { useContext } from "react";

import FifthChild from "../fifth-child/fifthChild";
import ReducerContext from "../useAppContext";

const FourthComponent = () => {
  const { state: value } = useContext(ReducerContext);
  console.log("fourth rerendered");
  return (
    <div>
      <h2>Fourth component</h2>
      <p data-testid="context-text">{value.name}</p>
      <FifthChild />
    </div>
  );
};

export default FourthComponent;
