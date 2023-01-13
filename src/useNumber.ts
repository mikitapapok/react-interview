import React, {useEffect, useState} from 'react';

const useNumber = () => {
    const [number,setNumber]=useState<number>(0)
   const increaseOnOne=()=>{
        setNumber(prev=>prev+1)
    }
    return {number,increaseOnOne}

};

export default useNumber;