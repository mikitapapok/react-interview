import {createContext, useContext} from "react";
import useUserReduser from "./useUserReduser";
export const ReducerContext = createContext(
    {} as ReturnType<typeof useUserReduser>
);
export const useAppContext=()=>useContext(ReducerContext)
export default ReducerContext;