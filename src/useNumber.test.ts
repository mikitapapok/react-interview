import {renderHook,act} from '@testing-library/react'
import useNumber from "./useNumber";

describe('testing of useNumber hook',()=>{
    test('get value from the hook',()=>{
        const {result}=renderHook(()=>useNumber())
       expect(result.current.number).toBe(0)
    })

    test('hook state shold be incremented',()=>{
        const {result}=renderHook(()=>useNumber())
        act(()=>{
            result.current.increaseOnOne()
        })
        expect(result.current.number).toBe(1)
    })
})