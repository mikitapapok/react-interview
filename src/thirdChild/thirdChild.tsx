import React from "react";
import FourthComponent from "../fourth-component/fourthComponent";




const ThirdChild = () => {
    console.log('third rerendered')
  return (
      <div>
          <h2>Third component</h2>
                    <FourthComponent />
          </div>);
};

export default ThirdChild;
