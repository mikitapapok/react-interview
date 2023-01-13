import {act, renderHook} from "@testing-library/react";
import useUserReduser from "./useUserReduser";
import '@testing-library/jest-dom/extend-expect';

describe('Testing useUserReducer hook',()=>{
    test('display should be displayed',()=>{
        const {result}=renderHook(()=>useUserReduser())
        expect(result.current.state.password).toBe(0)
        expect(result.current.state.name).toBe('user')

    })
    test('display should be dchanged according to dispatch',()=>{
        const {result}=renderHook(()=>useUserReduser())
        act(()=>{
            result.current.dispatch({type:'increase'})
        })
        act(()=>{
            result.current.dispatch({type:'change_name',nextName:'Alex'})
        })
        expect(result.current.state.password).toBeGreaterThan(0)
        expect(result.current.state.name).toBe('Alex')

    })
})