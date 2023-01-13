import React, {FC, memo, useContext} from "react";
import ThirdChild from "../thirdChild/thirdChild";
import {useAppContext} from "../useAppContext";




const SecondChild: React.FC = memo(

  () => {
        const valueFromReducer=useAppContext()
    const  onClickHandler=()=>{
                valueFromReducer.dispatch({type: 'change_name',nextName: 'Alexey'})
      }
      const changePassword=()=>{
            valueFromReducer.dispatch({type:'increase'})
      }
    return (
      <div>
        <h2>Second component</h2>
          <button onClick={onClickHandler}>Change value from custom hook</button>
          <button onClick={changePassword}> Change password</button>
        <ThirdChild />
      </div>
    );
  }
);

export default SecondChild;
