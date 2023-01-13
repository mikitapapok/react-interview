import React, {memo, useContext} from 'react';
import ReducerContext from "../useAppContext";

const FifthChild =memo( () => {
    const {state: password}=useContext(ReducerContext)
    console.log('fifth rerendered')
    return (
        <div>
            <h2>Fifth element</h2>
            <p>{password.password}</p>
        </div>
    )
})

export default FifthChild;